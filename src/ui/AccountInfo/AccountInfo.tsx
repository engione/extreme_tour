import { useSelector } from "react-redux";
import accInfo from "./AccountInfo.module.scss"

export const AccountInfo = () => {
    const user_metadata = useSelector((state: any) => state.user_metadata);
    return (
        <section className={accInfo.accInfo}>
            <div className="container">
                <h2 className={accInfo.title}>Аккаунт</h2>
                <div className={accInfo.infoWrapper}>
                    <div className={accInfo.infoRow}>
                        <div className={accInfo.rowLeft}>
                            <span className={accInfo.rowDescr}>Имя</span>
                            <span className={accInfo.rowData}>{user_metadata.fullName}</span>
                        </div>
                    </div>
                    <div className={accInfo.infoRow}>
                        <div className={accInfo.rowLeft}>
                            <span className={accInfo.rowDescr}>Почта</span>
                            <span className={accInfo.rowData}>{user_metadata.email}</span>
                        </div>
                    </div>
                    <div className={accInfo.infoRow}>
                        <div className={accInfo.rowLeft}>
                            <span className={accInfo.rowDescr}>Пароль</span>
                            <span className={accInfo.rowData}>********</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}