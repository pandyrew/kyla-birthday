interface Props {
    name: string;
    //h: number;
    w: number;
    //z:number;
}
import Image from "next/image";





export default function PhotoWindow(props: Props) {

    const windowStyle = {
        backgroundColor: '#D9D9D9',
        outline: '4px solid #6B6B6B',
        width: props.w,
        minWidth: '65px',
        height: 'auto',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'column',
        //zIndex: props.z,
        position: 'relative',
        borderRadius: '1px',
    }
    const imageStyle = {
        outline: '3px solid #6B6B6B',
        minWidth: '65px',
        borderRadius: '2px',
    }

    return (
        <div style={windowStyle}>
            <div className="h-7 p-1.7 pl-2">
                <div className="flex gap-2.5">
                    <div className='h-2.5 w-2.5 bg-[#C66F6F] rounded-sm'>
                        
                    </div>
                    <div className='h-2.5 w-2.5 bg-[#F1ED84] rounded-sm'>
                        
                    </div>
                    <div className='h-2.5 w-2.5 bg-[#76AE79] rounded-sm'>
                        
                    </div>
                </div>
            </div>
            <div className="">
                <Image
                src={props.name}
                width={props.w}
                height={props.w}
                alt="asdf"
                style={imageStyle}
                />
            </div>

        </div>
    )

}