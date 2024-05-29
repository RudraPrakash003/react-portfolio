import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Typography } from '@mui/material';
import resumePDF from '../Data/resume.pdf';

const workerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const Resume = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: '#64ffda', paddingTop: '3rem' }}>
            <Typography variant="h2" gutterBottom>Resume</Typography>
            <div style={{ width: '80%', backgroundColor: 'white' }}>
                <Worker workerUrl={workerUrl}>
                    <Viewer fileUrl={resumePDF} plugins={[defaultLayoutPluginInstance]} />
                </Worker>
            </div>
        </div>
    );
};

export default Resume;
