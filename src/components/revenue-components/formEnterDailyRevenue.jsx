import React, { useState, useEffect } from "react";

import { db } from "../../scripts/get-document";
import { useAuth } from "../../scripts/onAuthStateChanged";
import { query, collection, orderBy, onSnapshot, addDoc, doc, updateDoc, where, getDocs, getDoc } from "firebase/firestore";

import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

import "../../styles/components-styles/revenue/formEnterDailyRevenue.css";

export default function FormEnterDailyRevenue () {

    const { user, loading } = useAuth();

    // Data product
    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, "Product"),
            orderBy("code", "asc")
        );

        const unsub = onSnapshot(q, (snapshot) => {
            const updatedData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setDataProduct(updatedData);
        });

        return () => unsub();
    }, []);

    // Hàm sự kiện của button Submit => sau khi hoàn thiện form
    const submitFormEvent = async () => {
        
        // Một biến để check tất cả điều kiện cần thiết để được điền vào DataBase 
        let isValid = false;
        
        const dataUpdate = dataProduct.map(doc => ({
            id: doc.id,
            code: doc.code,
            category: doc.category,
            sizeM: Number(document.getElementById(`M-${doc.id}`).value),
            sizeL: Number(document.getElementById(`L-${doc.id}`)?.value || 0),
            addT: Number(document.getElementById(`add-${doc.id}`).value),
            dateEnter: document.getElementById(`input-date-info-daily-revenue`).value
        }));

        // Check input Date (Không cho phép bỏ trống) và <= ngày hiện tại 
        // Lấy ngày hiện tại và format lại định dạng
        const today = new Date();
        const inputDay = document.getElementById(`input-date-info-daily-revenue`).value;
        const inputDayObject = new Date(inputDay);

        const checkInputDate = inputDay !== "" && inputDay !== null && inputDay !== undefined;
        const checkInputDateLogic = inputDayObject <= today;
        if (!checkInputDate) {
            window.alert(
                `Vui lòng điền ngày tương ứng với doanh thu !!!`
            );
            return;
        }
        if (!checkInputDateLogic) {
            window.alert(
                `Vui lòng điền ngày phù hợp !!! (hôm nay là ${today})`
            );
            return;
        }

        const checkDateExists = async (selectedDate) => {
            try {
                const q = query(
                    collection(db, "Revenue"),
                    where("dateRevenue", "==", selectedDate)
                );
                const querySnapshot = await getDocs(q);

                return !querySnapshot.empty; // true nếu đã tồn tại
            } catch (error) {
                console.error("Lỗi truy vấn Firestore: ", error);
                return false;
            }
        };

        const exists = await checkDateExists(inputDayObject);

        if (exists) {
            window.alert(
                `Doanh thu hôm ${inputDayObject} đã được nhập`
            );
            return;
        }

        // Biến để lưu doanh thu và doanh thu chi tiết
        let revenueTotalDay = 0;
        let revenueTotalSizeMDay = 0;
        let revenueTotalSizeLDay = 0;

        // Biến Nhận biết sự thay đổi về số liệu
        // Đồng thời kiểm tra tính hợp lý của dữ liệu
        let isEnter = false;
        for (const item of dataUpdate) {

            // Tính toán doanh thu dựa trên số lượng nhập vào
            if (item.category == "coffee") {
                revenueTotalDay += item.sizeM * 6;
            } else {
                revenueTotalSizeMDay += item.sizeM * 5.5;
                revenueTotalSizeLDay += item.sizeL * 6.5;
                revenueTotalDay = revenueTotalSizeMDay + revenueTotalSizeLDay;
                revenueTotalDay += item.addT * 0.5;
            }

            // Check input size M luôn phải lơn hơn hoặc bằng 0
            let checkInputSizeM = item.sizeM < 0;
            if (checkInputSizeM) {
                isValid = false;
                window.alert(
                    `Giá trị không hợp lý tại sản phẩm code ${item.code} \n` +
                    `Giá trị nhập vào mỗi ô phải lớn hơn hoặc bằng 0 (nếu bằng 0 có thể để trống)`
                );
                return;
            }

            // Check input size L luôn phải lơn hơn hoặc bằng 0
            let checkInputSizeL = item.sizeL < 0;
            if (checkInputSizeL) {
                isValid = false;
                window.alert(
                    `Giá trị không hợp lý tại sản phẩm code ${item.code} \n` +
                    `Giá trị nhập vào mỗi ô phải lớn hơn hoặc bằng 0 (nếu bằng 0 có thể để trống)`
                );
                return;
            }
            
            // Check input Add Topping luôn phải lơn hơn hoặc bằng 0
            let checkInputSizeAddT = item.addT < 0;
            if (checkInputSizeAddT) {
                isValid = false;
                window.alert(
                    `Giá trị không hợp lý tại sản phẩm code ${item.code} \n` +
                    `Giá trị nhập vào mỗi ô phải lớn hơn hoặc bằng 0 (nếu bằng 0 có thể để trống)`
                );
                return;
            }
            
            // Check logic giữa add Topping và số lương hai size
            let checkInputAddTLogic = item.addT > (item.sizeM + item.sizeL);
            if (checkInputAddTLogic) {
                isValid = false;
                window.alert(
                    `Giá trị không hợp lý tại sản phẩm code ${item.code} \n` +
                    `Giá trị nhập vào mỗi ô phải lớn hơn hoặc bằng 0 (nếu bằng 0 có thể để trống)` +
                    `Giá trị Add Topping phải nhỏ hơn hoặc bằng tổng size M và size L.`
                );
                return;
            }

            // Phát hiện có số liệu lập tực trả về true và cắt vòng lặp
            if (item.sizeM > 0 || item.sizeL > 0) {
                isEnter = true;
                break;
            }
        }

        // Lấy và kiểm tra giá trị của tiền mặt
        const inputCash = document.getElementById("input-cash-info-daily-revenue").value;
        const checkInputCash = inputCash >= 0;
        const checkInputCashLogic = inputCash <= revenueTotalDay;
        if (!checkInputCash) {
            window.alert(
                `Vui lòng không được để trống !!! \n` +
                `Giá trị nhập vào mỗi ô phải lớn hơn hoặc bằng 0`
            );
            return;
        }
        if (!checkInputCashLogic) {
            window.alert(
                `Giá trị CASH không hợp lý !!!`
            );
            return;
        }
        
        // Kiểm tra số lượng thay đổi từ biến count
        if (isEnter) {
            // Confirm trước khi thay đổi trong database
            if (window.confirm("Bạn chắc chắn muốn Update")) {
                // Thực hiện cập nhật với những dữ liệu thay đổi 
                for (const item of dataUpdate) {
                    // Chỉ thực hiện thay đổi với những nơi mà có sản phẩm được mua 
                    if (item.sizeM != 0 || item.sizeL != 0) {
                        try {
                            const docRef = doc(db, "Product", item.id);
                            const docSnap = await getDoc(docRef);

                            if (docSnap.exists()) {
                                const data = docSnap.data();

                                // Lấy số lượng cũ
                                const oldM = data.quantitySoldM || 0;
                                const oldL = data.quantitySoldL || 0;
                                const oldAdd = data.quantityAddTopping || 0;

                                // Cộng thêm số mới
                                await updateDoc(docRef, {
                                    quantitySoldM: oldM + item.sizeM,
                                    quantitySoldL: oldL + item.sizeL,
                                    quantitySold: oldM + item.sizeM + oldL + item.sizeL,
                                    quantityAddTopping: oldAdd + item.addT
                                });

                            } else {
                                console.warn(`⚠️ Không tìm thấy document với ID: ${item.id} - code : ${item.code}`);
                            }

                        } catch (e) {
                            console.error("❌ Lỗi khi cập nhật:", e);
                        }
                    }
                }

                // Tính doanh thu tổng cả ngày
                revenueTotalDay = revenueTotalSizeMDay + revenueTotalSizeLDay;

                // Thêm dữ liệu về doanh thu vào DataBase
                try {
                    const docRef = await addDoc(collection(db, "Revenue"), {
                        userEmail: user.email,
                        dateRevenue: inputDayObject,
                        dateEnter: today,
                        cash: Number(inputCash),
                        card: revenueTotalDay - inputCash,
                        revenueSizeM: revenueTotalSizeMDay,
                        revenueSizeL: revenueTotalSizeLDay,
                        revenueTotal: revenueTotalDay,
                        raison: ""
                    });
                } catch (e) {
                    console.error("Lỗi :" + e)
                }

                // Clear content trong input
                for (const item of dataUpdate) {
                    document.getElementById(`M-${item.id}`).value = "";
                    if (item.category != "coffee") {
                        document.getElementById(`L-${item.id}`).value = "";
                    }
                    document.getElementById(`add-${item.id}`).value = "";
                    document.getElementById(`input-date-info-daily-revenue`).value = "";
                    document.getElementById(`input-cash-info-daily-revenue`).value = "";
                }
                
                // Hiển thị thông báo đã cập nhật thành công
                window.alert("Cập nhật thành công doanh thu ngày : " + inputDay);
            }
        } else {
            
            // Lí do không được để trống
            const checkRaison = (raison) => {
                return raison.trim() !== "";
            }
            let raisonAccept = true;
            while (!raisonAccept) {
                const raison = window.prompt("Nhập lý do không có doanh thu ngày " + inputDay);
                raisonAccept = checkRaison(raison);
            }
            // Thêm dữ liệu về doanh thu vào DataBase
                try {
                    const docRef = await addDoc(collection(db, "Revenue"), {
                        userEmail: user.email,
                        dateRevenue: inputDayObject,
                        dateEnter: today,
                        cash: 0,
                        card: 0,
                        revenueSizeM: 0,
                        revenueSizeL: 0,
                        revenueTotal: 0,
                        raison: raison
                    });
                } catch (e) {
                    console.error("Lỗi :" + e)
                }
        }
    }



    // Hàm sự kiện của button Submit => sau khi hoàn thiện form
    const clearFormEvent = () => {
        
        // Clear content trong input
        for (const item of dataProduct) {
            document.getElementById(`M-${item.id}`).value = "";
            if (item.category != "coffee") {
                document.getElementById(`L-${item.id}`).value = "";
            }
            document.getElementById(`add-${item.id}`).value = "";
            document.getElementById(`input-date-info-daily-revenue`).value = "";
            document.getElementById(`input-cash-info-daily-revenue`).value = "";
        }
    }

    return (
        <>
            <div className="main-enter-daily-revenue">
                <div className="panel-title-enter-daily-revenue">
                    <h1 className="title-enter-daily-revenue">Nhập doanh thu</h1>
                    <a href="/revenue" className="btn-return-enter-daily-revenue">Trở về</a>
                </div>
                <div className="form-enter-daily-revenue">
                    <div className="panel-input-info-daily-revenue">
                        <label htmlFor="date"><h3>Date :</h3></label>
                        <input id="input-date-info-daily-revenue" type="date" />
                        <label htmlFor="date"><h3>Cash :</h3></label>
                        <input id="input-cash-info-daily-revenue" type="number" />
                    </div>
                    <div className="table-enter-daily-revenue">
                        <table>
                            <thead>
                                <tr>
                                    <td>Code</td>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Total quantity sold</td>
                                    <td>Size M</td>
                                    <td>Size L</td>
                                    <td>Add topping</td>
                                </tr>
                            </thead>
                            <tbody>
                                {dataProduct.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.code}</td>
                                        <td className="name-table-enter-daily-revenue">{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{item.quantitySold}</td>
                                        {item.priceL ? <td><input className="input-quantity" type="number" id={`M-${item.id}`} placeholder="Size M" required/></td> : <td colSpan={2}><input className="input-quantity" type="number" id={`M-${item.id}`} placeholder="Size M" required/></td>}
                                        {item.priceL && (
                                            <td>
                                                <input 
                                                    className="input-quantity" 
                                                    type="number" 
                                                    id={`L-${item.id}`} 
                                                    placeholder="Size L"
                                                    required 
                                                />
                                            </td>
                                        )}
                                        <td>
                                            <input className="input-quantity" type="number" id={`add-${item.id}`} placeholder="Add topping" required/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="btn-panel-form-enter-daily-revenue">
                        <button className="btn-enter-daily-revenue" onClick={clearFormEvent}>Clear</button>
                        <button className="btn-enter-daily-revenue" onClick={submitFormEvent}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}