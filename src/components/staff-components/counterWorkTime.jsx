import React, { useEffect, useState } from "react";
import { query, collection,  orderBy, limit, getDocs, onSnapshot, doc } from "firebase/firestore";
import { db } from "../../scripts/get-document";

import "../../styles/components-styles/staff/counterWorkTime.css";


export default function CounterWorkTime () {

    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    
    // Data WorktimeStaff
    const [dataWTS, setDataWTS] = useState([]);

    // Data InfoStaff
    const [dataInfoStaff, setDataInfoStaff] = useState([]);

    const [workTimeTony, setWorkTimeTony] = useState(0);
    const [workTimeLuxy, setWorkTimeLuxy] = useState(0);
    const [workTimeLily, setWorkTimeLily] = useState(0);

    const listWorkTime = {
        Tony: workTimeTony,
        Luxy: workTimeLuxy,
        Lily: workTimeLily
    }

    // Thay đổi data khi DB thay đổi  
    useEffect(() => {
        // Data Worktime
        const unsubWT = onSnapshot(
            collection(db, "WorktimeStaff"),
            (snapshot) => {
                const updatedDataWT = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setDataWTS(updatedDataWT);
            }
        );

        // DataInfoStaff
        const unsubIS = onSnapshot(
            collection(db, "Staffs"),
            (snapshot) => {
                const updatedDataIS = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setDataInfoStaff(updatedDataIS);
            }
        );
        return () => {
            unsubWT();
            unsubIS();
        };
    }, []);

    // Hàm tính giờ làm theo tháng
    const calculTimeWorkingByMonth = (timeStart, timeEnd, nameStaff, month) => {
        
        const dateS = new Date(timeStart);
        const dateE = new Date(timeEnd);

        if (dateS.getMonth() + 1 == month) {
            const hoursS = dateS.getHours() + dateS.getMinutes() / 60;
            const hoursE = dateE.getHours() + dateE.getMinutes() / 60;
            const timeCalcul = hoursE - hoursS;

            if (nameStaff === "Tony") {
                setWorkTimeTony(prev => prev + timeCalcul)
            } else if (nameStaff === "Luxy") {
                setWorkTimeLuxy(prev => prev + timeCalcul)
            } else if (nameStaff === "Lily") {
                setWorkTimeLily(prev => prev + timeCalcul)
            }
        }
        
    }

    // Tính giờ làm của nhân viên
    useEffect(() => {
        setWorkTimeTony(0);
        setWorkTimeLuxy(0);
        setWorkTimeLily(0);
        dataWTS.forEach((item) => {
            calculTimeWorkingByMonth(item.start, item.end, item.title, currentMonth);
        });
    }, [dataWTS]);


    const handleSearchBtnWorkTime = () => {

        // Lấy tháng trong input month
        const inputMonthValue = document.getElementById("input-search-work-time-by-month").value;

        setWorkTimeTony(0);
        setWorkTimeLuxy(0);
        setWorkTimeLily(0);
        dataWTS.forEach((item) => {
            calculTimeWorkingByMonth(item.start, item.end, item.title, inputMonthValue)
        });

        console.log(dataWTS)
        console.log("Input : " + inputMonthValue)
    }

    return (
        <>
            <div className="main-counter-work-time">
                <div className="counter-work-time-panel">
                    <h1 className="title-counter-work-time">Thời gian làm việc của nhân viên Mon Amour</h1>
                    <div className="input-search-by-month">
                        <form onSubmit={handleSearchBtnWorkTime}>
                            <label htmlFor="month">Tháng :</label>
                            <input 
                                type="number" 
                                min="1" 
                                max="12" 
                                step="1" 
                                id="input-search-work-time-by-month" 
                                placeholder={currentMonth}
                                required
                            />
                            <button type="submit" id="btn-search-work-time-by-month">Search</button>
                        </form>
                    </div>
                    <table className="table-work-time">
                        <thead>
                            <tr>
                                <th>Tên nhân viên</th>
                                <th>Nickname</th>
                                <th>Tổng giờ làm trong tháng {currentMonth}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataInfoStaff.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Nickname}</td>
                                    <td>{listWorkTime[item.Nickname]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}