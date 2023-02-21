import CountdownTimer from "./CuentaRegresiva";

function PaginaError() {
    const targetDate = new Date('2023-02-22T17:30:00Z');
    return (
        <div className="bg-[url('https://i.postimg.cc/1RdvhmsT/portfolio-imagen-cerros.jpg')] bg-no-repeat bg-cover bg-center w-full h-full flex justify-center items-center absolute">
            <div className="w-4/12 h-1/2 flex justify-center bg-slate-200 opacity-60">
                <div className="w-3/4 h-3/4 bg-gray-500 flex-row text-center m-auto items-center justify-center">
                    <h1 className="text-8xl font-bold mt-4 mb-4" >404</h1>
                    <h2 className="text-xl mb-3">¡Esta página está en mantenimiento!</h2>
                    <p>Estará funcionando en: </p>
                    <CountdownTimer targetDate={targetDate}/>
                </div>
            </div>
        </div>
    )
  }
  
  export default PaginaError;
