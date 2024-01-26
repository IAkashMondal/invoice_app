// ButtonLogic.js
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import Decription from '../Decription';
import ReactDOMServer from 'react-dom/server';
export const downloadPdfAndSendData = async (data, setButtonDisabled) => {
    const descriptionHTML = ReactDOMServer.renderToString(<Decription />);

    try {
        // Disable the button to prevent multiple clicks during the process
        setButtonDisabled(true);

        // Send data to the server
        const response = await axios.post('http://localhost:3007/compantdata', data);

        // If server response is successful, proceed to generate and download PDF
        if (response.status === 200) {
            // HTML content of the description component
            const htmlContent = `<html><body>${descriptionHTML}</body></html>`;

            // Configure options for html2pdf
            const pdfOptions = { margin: 10, filename: 'GstPdfs/GstFile.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } };

            // Generate PDF from HTML content and download
            html2pdf().from(htmlContent).set(pdfOptions).save();
        } else {
            // Server request was not successful, show an alert
            alert('Server request failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    } finally {
        // Enable the button after the process is completed
        setButtonDisabled(false);
    }
};

export const downloadWordFile = (setButtonDisabled) => {
    const descriptionHTML = ReactDOMServer.renderToString(<Decription />);
    // Disable the button to prevent multiple clicks during the process
    setButtonDisabled(true);

    // HTML content of the description component
    const htmlContent = `<html><body>${descriptionHTML}</body></html>`;

    // Configure options for html2pdf
    const wordOptions = { margin: 10, filename: 'D:/GstWord/GstFile.docx', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } };

    // Generate Word file from HTML content and download
    html2pdf().from(htmlContent).set(wordOptions).save().finally(() => {
        // Enable the button after the process is completed
        setButtonDisabled(false);
    });
};
