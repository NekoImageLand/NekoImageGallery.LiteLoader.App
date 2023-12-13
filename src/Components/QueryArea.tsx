import { Box, Tab, Tabs } from '@mui/material';
import { SearchQuery } from '../Services/SearchQuery';
import { TextQueryForm } from './TextQueryForm';
import { ImageQueryForm } from './ImageQueryForm';
import { OCRQueryForm } from "./OCRQueryForm.tsx";
import { useTabState } from './TabState';
import { AdvancedQueryForm } from './AdvancedQueryForm';

export function QueryArea({onSubmit,}: {
    onSubmit?: (query: SearchQuery) => void;
}) {
    const { tab, setTab } = useTabState();
    const inputs = [
        <TextQueryForm key="text" onSubmit={onSubmit} />,
        <OCRQueryForm key="ocr" onSubmit={onSubmit} />,
        <ImageQueryForm key="image" onSubmit={onSubmit} />,
        <AdvancedQueryForm key="advance" onSubmit={onSubmit}/>,
    ];

    return (
        <Box
            display="flex"
            sx={{
                flexDirection: 'column',
                justifyItems: 'center',
                alignItems: 'center',
                gap: 1.5,
                padding: 1,
            }}
        >
            <Tabs variant='scrollable' value={tab} onChange={(_, v) => setTab(v)} aria-label="search tabs">
                <Tab label="Text Search" />
                <Tab label="OCR Text Search" />
                <Tab label="Image Search" />
                <Tab label="Advanced"/>
            </Tabs>
            {inputs[tab]}
        </Box>
    );
}
