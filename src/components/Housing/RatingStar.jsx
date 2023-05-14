import star from '../../assets/star.svg'

function RatingStar({fill}) {
    return ( 
        <svg xmlns={star} fill={fill}></svg>
    );
}

export default RatingStar;

const MenuIcon = (props) =>(
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} className={props.class}></svg>
)