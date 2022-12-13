import Image from 'next/image'
import {Button, Divider, Input, Space} from 'antd'
import {ChangeEvent, useCallback, useState} from "react";
import produce from 'immer'

import { FilterText } from '../../../constants/rent.constants'
import SearchIcon from '../../../assets/images/search_icon.png'
import House from '../../elements/house'
import SubContent from './components/subcontent'
import {RentNews} from "../../../types";

import styles from './style.module.scss'

interface IProps {
    data: RentNews[]
}

enum inputType  {
    CITY = 'city',
    DISTRICT = 'district',
    COMMUNE = 'commune',
    MINAREA = 'minArea',
    MAXAREA = 'maxArea',
    MINPRICE = 'minPricePerMonth',
    MAXPRICE = 'maxPricePerMonth'
}

type TState = {
    city?: string,
    district?: string,
    commune?: string,
    minArea?: number,
    maxArea?: number,
    minPricePerMonth?: number,
    maxPricePerMonth?: number
}

const initialState: TState = {}

const RentContent:React.FC<IProps> = (props): JSX.Element => {
    const [extendedFilter, setExtendedFilter] = useState<boolean>(false);
    const [state, setState] = useState<TState>(initialState);

    const handleClickMoreOptions = useCallback(() => {
        setExtendedFilter(!extendedFilter);
    }, [extendedFilter]);


    const handleChangeInput = useCallback((type: inputType, e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) return;
        setState((prev) => produce(prev, draft => {
            draft[type] = e.target.value
        }))
    },[state]);

    const handleClickSearch = useCallback(() => {
        console.log(state);
    },[state])

    return (
        <div className={styles.container}>
            <Space className={styles.filter}>
                <Input
                    placeholder={FilterText.CITY}
                    className={styles.input}
                    onChange={(e) => handleChangeInput(inputType.CITY, e)}/>
                <Input
                    placeholder={FilterText.DISTRICT}
                    className={styles.input}
                    onChange={(e) => handleChangeInput(inputType.DISTRICT, e)}/>
                <Input
                    placeholder={FilterText.COMMUNE}
                    className={styles.input}
                    onChange={(e) => handleChangeInput(inputType.COMMUNE, e)}/>
                <Input
                    placeholder={FilterText.MINPRICE}
                    className={styles.input}
                    onChange={(e) => handleChangeInput(inputType.MINPRICE, e)}/>
                <Button
                    className={styles.button_option}
                    onClick={handleClickMoreOptions}>More Options</Button>
                <Button
                    icon={<Image src={SearchIcon} alt="search" style={{ width: 45, height: 45 }} />}
                    className={styles.button}
                    onClick={handleClickSearch}
                />
            </Space>

            {extendedFilter === true &&
                <Space className={styles.filter}>
                    <Input
                        placeholder={FilterText.MAXPRICE}
                        className={styles.input}
                        onChange={(e) => handleChangeInput(inputType.MAXPRICE, e)}/>
                    <Input
                        placeholder={FilterText.MINAREA}
                        className={styles.input}
                        onChange={(e) => handleChangeInput(inputType.MINAREA, e)}/>
                    <Input
                        placeholder={FilterText.MAXAREA}
                        className={styles.input}
                        onChange={(e) => handleChangeInput(inputType.MAXAREA, e)}/>
                </Space>
            }

            <Divider style={{ marginTop: 10 }} />

            <Space className={styles.content}>
                <div>
                    {
                        props.data && props.data.map((rentNews) => (
                            <House key={rentNews._id} title={rentNews.title} price={rentNews.pricePerMonth.toString()} description={rentNews.description}/>
                        ))
                    }
                </div>
                <div style={{ width: 550, display: 'flex', justifyContent: 'center' }}>
                    <SubContent />
                </div>
            </Space>
        </div>
    )
}

export default RentContent;
