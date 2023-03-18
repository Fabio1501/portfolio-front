import React, {useState, useRef} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import './QuillModules';
import Alert from "../../Components/Alertas/Alert.jsx";

const ContactoSection = ({customContacto}) => {
    const [values, setValues] = useState({
        emailContacto: '',
        asuntoContacto : '',
        mensajeContacto : ''
    })
    const [errors, setErrors] = useState({})
    const reactQuillRef = useRef(null);
    const modules = {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image', 'video'],
        ],
        nombreContacto: true
    }

    const validationErrors = () => {
        const regexEmail = /^([a-zA-Z0-9]+)([a-zA-Z0-9._-]+)?@gmail\.com$/;
        let errors = {}

        if (!values.emailContacto.length) {
            errors.emailContacto = 'Este campo no puede estar vacío, por favor ingrese texto...'   
        }

        if (!values.mensajeContacto.length) {
            errors.mensajeContacto = 'Este campo no puede estar vacío, por favor ingrese texto...'   
        }

        if (!regexEmail.test(values.emailContacto)) {
            errors.emailContacto = 'Por favor ingrese un email valido...'   
        }
    
        return errors
    }

    const handleChangeQuill = (e) => {
        const quill = reactQuillRef.current.getEditor();
        const contentModule = quill.getModule('nombreContacto');
        const currentContent = contentModule.getNombreContacto();
        
        setValues({
            ...values, mensajeContacto : currentContent
        })
        setErrors(validationErrors({
            ...values, mensajeContacto : currentContent
        }))
    }

    const handleChange = (e) => {
        setValues({
            ...values, [e.target.name] : e.target.value
        })
        setErrors(validationErrors({
            ...values, [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!Object.entries(errors).length) {
            const $loader = document.querySelector(".loader")
            $loader.classList.remove("hidden");
            try {
                let response = await axios.post("https://formsubmit.co/ajax/fabiuuu8@gmail.com", 
                {
                    message: values.mensajeContacto, 
                    email: values.emailContacto, 
                    subject : values.asuntoContacto, 
                }
                );
                if (response.status === 200) {
                    // se envió correctamente el formulario
                    $loader.classList.add("hidden");
                    Alert({
                        title: "Muchas gracias por contactarme!",
                        text: "No lo olvides, eres una persona maravillosa! :)",
                        icon: "success",
                    });
                    setValues({
                        emailContacto: '',
                        asuntoContacto : '',
                        mensajeContacto : ''
                    })
                } else {
                    throw new Error('No se pudo enviar el formulario');
                }
            } catch (error) {
                setTimeout(()=>{
                    Alert({
                        title: "Lo siento :(",
                        text: "Hubo un error al mandar el formulario!",
                        icon: "error",
                    });
                }, 3000)
            }
            
        }
        Alert({
            title: "Lo siento :(",
            text: "Debes completar los campos obligatorios!",
            icon: "error",
        });
    }

    return (
        <section className='w-full flex-col items-center justify-center mb-24'>
            <h2 className='mb-24 text-4xl font-semibold text-center text-white underline'>{customContacto.title.content}</h2>
            
            <article className='w-full flex items-center justify-between mt-16'>
                <form onSubmit={handleSubmit} className = 'w-2/3 flex flex-col space-around items-center gap-8'>
                    <h3 className='text-xl text-white text-center'>{customContacto.form.subtitle.content}</h3>
                    {
                        customContacto.form.inputs.map(inp => {
                            if (inp.name === 'mensajeContacto') {
                                return(
                                <div className='self-start w-full'>
                                    <label className='text-white text-[12px]'>{inp.content}</label>
                                    <ReactQuill 
                                    modules={modules}
                                    className = 'text-white mt-6 w' 
                                    theme="snow" 
                                      onChange = {handleChangeQuill}
                                      ref={reactQuillRef}/>
                                    {!!errors.mensajeContacto && <p className="text-red-900 text-xl">{errors.mensajeContacto}</p>}
                                </div>
                                )
                            }
                            return(
                                <div class="relative z-0 w-full mb-6 group">
                                <input name={inp.name} onChange = {handleChange} value = {values[`${inp.name}`]} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[#3BFE0B] peer" />
                                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#3BFE0B] peer-focus:dark:text-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{inp.content}</label>
                                {!!errors[`${inp.name}`] && <p className="text-red-900 text-xl">{errors[`${inp.name}`]}</p>}
                            </div>
                            )
                        })
                    }
                    <input type='submit' className='bg-[#2f4f4f] cursor-pointer border-2 border-[#3BFE0B] text-[#3BFE0B] text-xl font-bold rounded-lg py-2 w-3/4 tracking-[.15em] hover:bg-transparent' id='disabled' 
                    value='Enviar mensaje'
                    />
                    <span className='loader hidden bg-transparent h-[50px] w-[50px] animate-[rotate_1s_ease-in-out_infinite] after:rounded-full after:content-[""] after:block after:w-[20px] after:h-[20px] before:rounded-full before:content-[""] before:block before:w-[20px] before:h-[20px] before:animate-[ball1_1s_infinite] before:bg-[#ffffff] before:shadow-[30px_0_0_0_#3BFE0B] mb-[10px] after:animate-[ball2_1s_infinite] after:bg-[#3BFE0B] after:shadow-[30px_0_0_0_#ffffff]'></span>
                </form>
                <article className='bg-[#2f4f4f] py-8 px-8 rounded-lg flex flex-col items-center justify-between gap-y-8'>
                    <div className='w-full flex flex-col justify-between '>
                        
                        <div className='flex flex-col items-center justify-evenly gap-y-8'>
                            {
                                customContacto.redes.profesionales.redesProfesionales.map(red => {
                                    return(
                                        <a key={red.url.id}
                                         href={red.url.href} 
                                         target = {red.url.target}
                                         className = 'hover:scale-[1.1]'>
                                            <img className='w-10' key={red.image.id} src={red.image.src} alt = {red.image.alt}/>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='w-full flex flex-col'>
                        <div className='flex flex-col items-center justify-evenly gap-y-8'>
                            {
                                customContacto.redes.personales.redesPersonales.map(red => {
                                    return(
                                        <a key={red.url.id}
                                         href={red.url.href} 
                                         target = {red.url.target}
                                         className = 'hover:scale-[1.1]'>
                                            <img className='w-10' key={red.image.id} src={red.image.src} alt = {red.image.alt}/>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </article>
            </article>
        </section>
    );
}

export default ContactoSection;
