import { useEffect, useState } from "react";

export default function UEWPA(){
    const [avatars, setAvatars] = useState([]),
        [img, setImg] = useState(false),
        [value, setvalue] = useState(''),
        [desc, setDesc] = useState(''),
        [url, setUrl] = useState('')

    function handleImg(e){
        const file = e.target.files[0]
        if(file){
            file.preview = URL.createObjectURL(file)
            setImg(file)
        }
    }

    // when render img, localhost will save the picture to memmory so after used it need to be freed
    useEffect(() => {
        // Clean up function
        return () => {
            setTimeout(() => {
                url && URL.revokeObjectURL(url)
                setUrl('')
            }, 1000);
        }
    },[url])


    function handleSetAvatar(){
        console.log('log success');
        if(img && value && desc){
            let data = {
                img,
                value,
                desc
            }
            data = [...avatars, data];
            setvalue('');
            setDesc('');
            setImg(false);
            document.querySelector('input[type="file"]').value = null;
            return data;
        }
        return avatars
    }

    function handleDelete(id){
        setUrl(avatars[id].img.preview);
        avatars.splice(id, 1);
        setAvatars(avatars);
    }

    return (
        <div>
            <div>
                <input  value={value} onChange={(e) => setvalue(e.target.value)} />
            </div>
            <div>
                <input value = {desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div>
                <input type="file" onChange={(e) => handleImg(e)} />
            </div>
            <button
                onClick={() => setAvatars(handleSetAvatar)}
            >
                Click Me!
            </button>

            {avatars && (
                <div>
                    {avatars.map((avatar, index) => (
                        <div key={index} style={{
                            display: 'inline-block',
                            width: `calc(100% / 3)`
                        }}>
                            <button onClick={() => handleDelete(index)} style={{
                                float: 'right',
                                height: '20px',
                                with: '20px' 
                            }}>X</button>
                            <h1>{avatar.value}</h1>
                            <img src={avatar?.img?.preview} alt="" height="500px" width='100%' />
                            <p>{avatar.desc}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}