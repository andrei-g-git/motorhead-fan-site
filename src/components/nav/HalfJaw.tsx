import { QuadPosition } from '@/app/lib/types'
import "./HalfJaw.scss";

const HalfJaw = ({position}: {position: QuadPosition}) => {
    return (
        <div className={`${position}-fangs`}>

        </div>
    )
}

export default HalfJaw;