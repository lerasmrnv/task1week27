import React from "react";

class Card extends React.Component {
    render() {
        const { nameTariff, rate, colorItem, colorShell, isSelected } = this.props;
        return (
            <div className={"item " + (isSelected ? "selected" : "")}>
                <div className={colorItem}>
                    <h2 className="title">Безлимитный {nameTariff}</h2>
                </div>
                <div className={colorShell}>
                    <div className="tariff" >
                        <span className="text1">руб</span>
                        <h3 className="nameTariff">{nameTariff}</h3>
                        <span className="text2"> /мес</span>
                    </div>
                </div>
                <p className="rate">до {rate} Мбит/сек</p>
                <p className="details">Объем включенного трафика не ограничен</p>
            </div>
        )
    }
}

export default Card; 