


const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#FFB300"
        },
        secondary:{
            main:"#444444"
        },
        black:{
            main:"#242B2E"
        },
        background:{
            main:"#000000",
            default:"#111111",
            paper:"#232323"
        },
        textColor:{
            main:"#111111"
        }
    }
})