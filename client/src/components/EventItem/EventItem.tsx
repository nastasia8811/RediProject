import React, {useState} from 'react';
import './EventItem.scss';
import IconButton from '@mui/material/IconButton';
//import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import EventCreate from "../../pages/EventCreate/EventCreate";
import {EventData, actionEventData, delApiOneEvent, bookOrCencelApiEvent} from "../../reducers/event.reducer";
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";


interface EventItemProps {
    event: EventData;
    onClick?: () => void;
    type?:string;

}

const EventItem: React.FC<EventItemProps> = ({event, onClick,type="full"}) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const {_id, img, title} = event;
    const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);

    // @ts-ignore
    const userData =useSelector((state)=> state.login.userData)
    console.log(userData)
    const toggleModalAuth = (event: EventData) => {
        setIsModalAuthOpen(!isModalAuthOpen);
        dispatch(actionEventData(event))
    };

    const closeModalCreateEvent = () => {
        setIsModalAuthOpen(false);
    }
if (type === "full") {

    return (
        <div className="item-wrapper" onClick={onClick}>
            <div className="item-wrapper-buttons"></div>
            <img className="item-wrapper__img" key={_id} src={img} alt={title}/>
            <h2 className="item-wrapper__title" key={_id}>{title}
                <IconButton aria-label="delete" color="primary">
                <DeleteOutlineOutlinedIcon onClick={(e) => {
                    e.stopPropagation();
                    if (typeof _id === "string") {
                        dispatch(delApiOneEvent(_id))
                    }
                }}/>
            </IconButton>
                <IconButton aria-label="edit" color="primary" onClick={(e) => {
                    e.stopPropagation();
                    toggleModalAuth(event)
                }}
                >
                    <EditOutlinedIcon/>
                </IconButton>
                {isModalAuthOpen && <EventCreate closeModalCreateEvent={() => closeModalCreateEvent()}/>}
                <IconButton aria-label="delete" color="primary" onClick={(e) => {
                    e.stopPropagation();
                    if (typeof _id === "string") {
                        dispatch(bookOrCencelApiEvent(_id,userData._id))
                    }
                }}
                          >
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <div>{event.available}</div>
            </h2>


        </div>

    );
}
else {
    return (
    <div className="item-wrapper">
        <div className="item-wrapper-buttons">
        </div>
        <img className="item-wrapper__img" key={_id} src={img} alt={title}/>
        <h2 className="item-wrapper__title" key={_id}>{title}</h2>


    </div>
    )
}
}
export default EventItem;
