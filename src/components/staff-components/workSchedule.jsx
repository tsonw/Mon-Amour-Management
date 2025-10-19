import React, { useState, useEffect, useRef } from "react";
import { collection, getDocs, query, limit, orderBy, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from "../../scripts/get-document";
import { Scheduler } from "@aldabil/react-scheduler";
import "../../styles/components-styles/staff/workSchedule.css";
import { SubTitle } from "chart.js";
import Navigation from "../navigation";

export default function WorkSchedule () {

    const [dataWorkTimeStaff, setDataWorkTimeStaff] = useState([]);

    // Hàm lấy dữ liệu từ DataBase
    const fetchData = async () => {
        const qWS = query(
            collection(db, "WorktimeStaff")
        );

        const querySnapshotWS = await getDocs(qWS);

        const dataWS = querySnapshotWS.docs.map(doc => ({
            ...doc.data()
        }));

        setDataWorkTimeStaff(dataWS);
    };

    // Lấy dữ liệu từ Firestore (Chart)
    useEffect(() => {
        fetchData();
    }, []);

    // Chuyển file json thành object
    const eventsRef = useRef([]); 
    const [myEvents, setMyEvents] = useState([]);
    useEffect(() => {
        const parsedEvents = dataWorkTimeStaff.map((doc) => ({
            ...doc,
            start: new Date(doc.start),
            end: new Date(doc.end),
        }));

        const isSame =
            parsedEvents.length === eventsRef.current.length &&
            parsedEvents.every((e, idx) => e.event_id === eventsRef.current[idx]?.event_id);

        if (!isSame) {
            setMyEvents(parsedEvents);
            eventsRef.current = parsedEvents;
        }
    }, [dataWorkTimeStaff])

    const listColorStaff = {
        Tony: "#FFB82B",
        Lucy: "#EB4886",
        Lily: "#7ACBBE",
        Trang: "#8e7acbff",
        Huyen: "#cb7abfff"
    };

    const handleConfirm = async (event, action) => {
        if (action === "create") {
            // Viết lại chuỗi đúng format cho Start
            const dateS = new Date(event.start);
            const formattedS = `${dateS.getFullYear()}/${dateS.getMonth() + 1}/${dateS.getDate()} ${dateS.getHours()}:${dateS.getMinutes().toString().padStart(2, '0')}`;
            
            // Viết lại chuỗi đúng format cho End
            const dateE = new Date(event.end);
            const formattedE = `${dateE.getFullYear()}/${dateE.getMonth() + 1}/${dateE.getDate()} ${dateE.getHours()}:${dateE.getMinutes().toString().padStart(2, '0')}`;

            // Thêm sự kiện mới vào DataBase
            try {
                await addDoc(collection(db, "WorktimeStaff"), {
                    event_id: crypto.randomUUID(),
                    title: event.title,
                    subTitle: event.subTitle || "",
                    start: formattedS,
                    end: formattedE,
                    color: listColorStaff[event.title],
                    editable: false
                });
                console.log("🟢 Document add successfully!");
                await fetchData();
            } catch (err) {
                console.error("🔴 Error add document:", err);
            }
        } 

        return event; 
    };

    // Hàm xoá sự kiện trên lịch
    async function handleDelete (id) {
        if (window.confirm("Bạn có chắc chắn muốn xoá lịch này không?")) {
            try {
                // Xoá trên Firestore
                const querySnapshot = await getDocs(collection(db, "WorktimeStaff"));
                querySnapshot.forEach(async (docu) => {
                    const data = docu.data();
                    if (data.event_id === id) {
                        await deleteDoc(doc(db, "WorktimeStaff", docu.id));
                        console.log("✅ Xoá trên Firestore thành công!");
                    }
                });
    
                // Xoá trên UI
                setMyEvents((prevEvents) =>
                    prevEvents.filter((event) => event.event_id !== id)
                );
            } catch (err) {
                console.error("❌ Xoá thất bại:", err);
            }
        }
    }

    return (
        <>
            <div className="main-work-schedule">
                <h1 className="title-work-schedule">Lịch làm việc nhân viên trong tuần</h1>
                <div className="work-schedule-panel">
                    <Scheduler
                        view="week"
                        events={myEvents}
                        onConfirm={handleConfirm}
                        onDelete={handleDelete}
                        translations={{
                        navigation: {
                                month: "Month",
                                week: "Week",
                                day: "Day",
                                today: "Today",
                                agenda: "Agenda"
                            },
                            form: {
                                addTitle: "Nhập lịch làm việc của nhân viên",
                                editTitle: "Edit Event",
                                confirm: "Confirm",
                                delete: "Delete",
                                cancel: "Cancel"
                            },
                            event: {
                                title: "Nhập tên của nhân viên (Nickname viết hoa chữ cái đầu)",
                                subtitle: "note nếu cần",
                                start: "Check in",
                                end: "Check out",
                                allDay: "All Day"
                            },
                            validation: {
                                required: "Required",
                                invalidEmail: "Invalid Email",
                                onlyNumbers: "Only Numbers Allowed",
                                min: "Minimum {{min}} letters",
                                max: "Maximum {{max}} letters"
                            },
                            moreEvents: "More...",
                            noDataToDisplay: "No data to display",
                            loading: "Loading..."
                        }}
                    />
                </div>
            </div>
        </>
    );
}