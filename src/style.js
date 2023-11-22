const style = {
    mainContainer: {
        width: '100%',
        height: '100%',
        maxWidth: '3000px !important',
        padding: '0 !important',
        display: 'flex'
    },
    sideBarContainer: {
        width: {
            lg: '17%',
            md: '17%',
            sm: '100%',
            xs: '100%'
        },
        height: '100%',
        backgroundColor: 'white',
        padding: '0 !important',
        margin: '0 !important',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflowX: 'hidden'
    },
    sideBarBox: {
        width: '100%',
        height: '30%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    profileImage: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        marginTop: '20px'
    },
    sideBarList: {
        width: '80%',
        height: '50px',
        border: '1px solid #d2d2d4',
        borderRadius: '5px',
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
    },
    dashboardMainContainer: {
        width: '100%',
        height: '100%',
        margin: '0 !important',
        paddingLeft: '50px !important',
        overflowY: 'scroll',
        paddingRight: '0 !important',
        "&::-webkit-scrollbar": {
            display: 'none',
          },
          scrollbarWidth: 'none',
    },
    dashboardHeading: {
        fontSize: '35px',
        fontWeight: 'bold',
        mt: 1,
        display: {
            lg: 'inline-block',
            md: 'inherit',
            xs: 'inherit'
        }
    },
    dashboardToggleButton: {
        borderRadius: '50px !important',
        right: {
            lg: '100px'
        },
        position: {
            lg: 'absolute',
            md: 'inherit',
            xs: 'inherit'
        },
        mt: 1,
        ml: {
            lg: '0',
            md: '250px',
        }
    },
    dashboardList1Container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '10px !important',
        width: '93%',
        justifyContent: 'space-between',
        gap: '20px',
        padding: '0 !important'
    },
    dashboardList2Container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: {
            lg: '10px !important',
            md: '20px !important',
            sm: '50px !important',
            xs: '50px !important'
        },
        width: '93%',
        justifyContent: 'space-between',
        gap: '20px',
        marginLeft: '0 !important',
        padding: '0 !important'
    },
    sideSlideButton: {
        width: '50px',
        height: '50px',
        border: 'none',
    }
}

export default style