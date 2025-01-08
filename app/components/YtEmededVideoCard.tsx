import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface YtEmededVideoCardProps {
  width?: string;
  height?: string;
  src?: string;
  title?: string;
  description?: string;
  style?: React.CSSProperties;
}

// Define your custom theme
const customTheme = createTheme({
  palette: {
    mode: 'dark', // or 'light'
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
});

export default function YtEmededVideoCard({ width, height, src, title, description, style }: YtEmededVideoCardProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <Card sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {title && (
            <Typography variant="h5">{title}</Typography>
          )}
          {description && (
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {description}
            </Typography>
          )}
        </CardContent>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            width={width || '560'}
            height={height || '315'}
            src={src || "https://www.youtube.com/embed/_mwPVazyyO4?si=vFctZSOpWYBYaztx"}
            title={title || "YouTube video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={style || { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </Card>
    </ThemeProvider>
  );
}
