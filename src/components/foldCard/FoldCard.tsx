import { ReactNode, useState } from "react";
import style from "./FoldCard.module.scss";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
interface IFoldCard {
  title: string;
  children: ReactNode;
}

const FoldCard = ({ title, children }: IFoldCard) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className={style.foldCard}>
      <div className={style.foldCardHeader}>
        <div className={style.foldCardTitle}>{title}</div>
        <div onClick={() => setToggle(!toggle)}>{toggle ? <DownOutlined /> : <UpOutlined />}</div>
      </div>
      <div className={style.foldCardBody}>{toggle && children}</div>
    </div>
  );
};

export default FoldCard;
