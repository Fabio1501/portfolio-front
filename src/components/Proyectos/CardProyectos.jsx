import React from 'react';
import { Link } from 'react-router-dom';

const CardProyectos = ({grid, proy}) => {

    return (
        <div className='grid grid-rows-2 grid-cols-12 gap-0 h-full gap-x-16 gap-y-16'>
            {console.log(proy)}
            {
                !grid ?
                <section key={proy.image.id} className={`bg-gray-400 row-span-1 col-span-6 col-start-4 col-end-10`}>
                    <img src={proy.image.src} alt={proy.image.alt}/>
                    <h3>{proy.title.content}</h3>
                    <p>{proy.parrafo.content}</p>
                    <div>
                        {
                            proy.buttons.map(btn => {
                                if(btn.url.type === 'local'){
                                    return(
                                        <Link to={btn.url.href}>
                                            {btn.text.content}
                                        </Link>
                                    )
                                }
                                return(
                                    <a href = {btn.url.href} target = {btn.url.target}>
                                        {btn.text.content}
                                    </a>
                                )
                            })
                        }
                    </div>
                </section> :
                <section key={proy.image.id}  className="bg-gray-400 row-span-1 col-span-6">
                    <img src={proy.image.src} alt={proy.image.alt}/>
                    <h3>{proy.title.content}</h3>
                    <p>{proy.parrafo.content}</p>
                    <div>
                        {
                            proy.buttons.map(btn => {
                                if(btn.url.type === 'local'){
                                    return(
                                        <Link to={btn.url.href}>
                                            {btn.text.content}
                                        </Link>
                                    )
                                }
                                return(
                                    <a href = {btn.url.href} target = {btn.url.target}>
                                        {btn.text.content}
                                    </a>
                                )
                            })
                        }
                    </div>
                </section>
            }
        </div>
    );
}

export default CardProyectos;
