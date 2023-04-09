import { useEffect, useState } from "react"
const txt = 'https://docdro.id/WuTz4pZ'
import Alert from "../Alertas/Alert";

const NavFixed = () => {

    const hiddenFunctions = () => {
        const $menu = document.getElementById('speed-dial-menu-default')
        const $equis = document.getElementById('equis')
        if ($menu.classList.contains('hidden')) {
            $menu.classList.remove('hidden')
            $equis.classList.remove('rotate-0')
            $equis.classList.add('rotate-45')
            return;
        }

        $menu.classList.add('hidden')
        $equis.classList.remove('rotate-45')
        $equis.classList.add('rotate-0')
    }

    const handlePrint = () => {
        const fileUrl = 'src/assets/CV_Fabian.pdf';
        const printWindow = window.open('', 'Print Window', 'height=800,width=900');

        printWindow.document.write(
            `<html>
            <head>
                <title>Documento PDF</title>
                <script>
                window.onload = function() { window.print(); }
                </script>
            </head>
            <body>
                <embed src="${fileUrl}" width="100%" height="100%" />
            </body>
            </html>`
        );

        printWindow.document.close();
    }

    const shareSocialRed = () => {
        const pdfUrl = 'https://docdro.id/WuTz4pZ';

        if (navigator.share) {
            navigator.share({
            title: 'Compartir PDF',
            text: 'Mira este archivo PDF',
            url: pdfUrl
            })
            .then(() => setTimeout(() => {Alert({
                title: "Muchas gracias por compartir!",
                text: "No lo olvides, eres una persona maravillosa! :)",
                icon: "success",
            })}, 7000))
            .catch(error =>
                setTimeout(() => {
                    Alert({
                        title: "Lo siento :(",
                        text: `${error}`,
                        icon: "error",
                    })      
                }, 7000)
            );
        } else {
            Alert({
                title: "Lo siento :(!",
                text: `Esta función no está disponible en tu navegador! :(`,
                icon: "error",
            })
        }
    }

    const copyPdf = (txt) => {
        navigator.clipboard.writeText(txt)
        .then(() =>Alert({
            title: "¡Copiado al portapapeles!",
            text: "Muchas gracias por apoyarme!",
            icon: "success",
        }))
        .catch(() => Alert({
            title: "¡Error al copiar!",
            text: "No te rindas, recarga la web y vuelve a intentarlo!",
            icon: "error",
        }));
    }

    const handleDownload = () => {
        const url = `src/assets/CV_Fabian.pdf`;
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CV_Fabian.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
            Alert({
                title: "!Descarga exitosa!",
                text: "Muchas gracias por apoyarme!",
                icon: "success",
            })
        }, 7000);
    };

    return(
        <div className="xl:block fixed right-10 bottom-8 group hidden">
            <div id="speed-dial-menu-default" className="flex flex-col hidden items-center mb-4 space-y-2">
                <button 
                onClick={shareSocialRed}
                type="button" 
                id="share"
                className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-[#2f4f4f]/80 dark:hover:bg-[#2f4f4f] focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                    <svg aria-hidden="true" className="w-6 h-6 -ml-px " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
                    <span className="sr-only">Share</span>
                </button>
                
                <button 
                onClick={handlePrint}
                type="button" id="print" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-[#2f4f4f]/80 dark:hover:bg-[#2f4f4f] focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Print</span>
                </button>
                
                <button
                onClick={handleDownload}
                type="button" id = "download" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-[#2f4f4f]/80 dark:hover:bg-[#2f4f4f] focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z" fill-rule="evenodd"></path></svg>
                    <span className="sr-only">Download</span>
                </button>
                
                <button 
                onClick={() => copyPdf(txt)}
                type="button" id="copy" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-[#2f4f4f]/80 dark:bg-[#2f4f4f]/80 dark:hover:bg-[#2f4f4f] focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg>
                    <span className="sr-only">Copy</span>
                </button>
                
            </div>
            <button type="button" onClick={hiddenFunctions} className="flex cursor-pointer items-center justify-center text-white bg-[#3BFE0B] rounded-full w-16 h-16 hover:bg-[#3BFE0B] dark:bg-[#3BFE0B]/50 dark:hover:bg-[#3BFE0B] focus:ring-4 focus:white focus:outline-none dark:focus:[#3BFE0B]">
                <svg aria-hidden="true" id="equis" className="w-12 h-12 transition-transform " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                <span className="sr-only">Open actions menu</span>
            </button>
        </div>
    )
}

export default NavFixed;
