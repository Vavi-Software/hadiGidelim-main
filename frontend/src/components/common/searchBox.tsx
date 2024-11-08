import React from 'react';
import {Box, Button, TextField} from '@mui/material';

interface SearchInputProps {
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Arama yapın...', onChange }) => {
    return (
        <Box
            position="absolute"
            top={20}
            width="80%"
            display="flex"
            justifyContent="center"
            zIndex={10}
        >
            <TextField
                variant="outlined"
                placeholder={placeholder}
                fullWidth
                onChange={onChange}
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 2,
                }}
            />
            <Button
                sx={{
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 2,
                    borderBottomRightRadius: 2,
                    height: 55,
                    marginLeft: -1,
                    backgroundColor: '#ea0e01',
                    ":hover": {
                        backgroundColor: 'white',
                        color: '#ea0e01',
                    }
                }}
                variant="contained" color="primary">
                Ara
            </Button>
        </Box>
    );
};

export default SearchInput;
