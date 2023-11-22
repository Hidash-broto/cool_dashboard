import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import React from "react";
import style from "../style";
import PersonIcon from "@mui/icons-material/Person";
import BackupIcon from "@mui/icons-material/Backup";
import EmailIcon from "@mui/icons-material/Email";

function Dashboard() {
    const [alignment, setAlignment] = React.useState("web");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <>
            <Container sx={style.dashboardMainContainer}>
                <Typography sx={style.dashboardHeading}>
                    Choose a plan that's just right for you !
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={style.dashboardToggleButton}
                >
                    <ToggleButton value="web">Monthly</ToggleButton>
                    <ToggleButton value="android">Annually</ToggleButton>
                </ToggleButtonGroup>
                <Stack direction="column" spacing={2}>
                    <Container sx={style.dashboardList1Container}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontWeight: "bold" }}
                                    variant="h5"
                                    component="div"
                                >
                                    Basic
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, textDecoration: "line-through", color: "red" }}
                                    color="text.secondary"
                                >
                                    $ 89.99/mo
                                </Typography>
                                <Typography variant="h5" component="div">
                                    $ 9.99/mo
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: "#edc75c", mt: 1 }}
                                    size="small"
                                >
                                    Get Started
                                </Button>
                                <Divider sx={{ mt: 2, mb: 1 }} />
                                <Typography>what you'll get:</Typography>
                                <Container
                                    sx={{
                                        padding: "0 !important",
                                        display: "flex",
                                        alignItems: "center",
                                        ml: 1,
                                        mt: 1,
                                    }}
                                >
                                    <PersonIcon sx={{ fontSize: "20px" }} />
                                    <Typography sx={{ fontSize: "15px" }} component="div">
                                        Upto 25 Users
                                    </Typography>
                                </Container>
                                <Container
                                    sx={{
                                        padding: "0 !important",
                                        display: "flex",
                                        alignItems: "center",
                                        ml: 1,
                                        mt: 1,
                                    }}
                                >
                                    <BackupIcon sx={{ fontSize: "20px" }} />
                                    <Typography sx={{ fontSize: "15px" }} component="div">
                                        Upto 25gb Storage
                                    </Typography>
                                </Container>
                                <Container
                                    sx={{
                                        padding: "0 !important",
                                        display: "flex",
                                        alignItems: "center",
                                        ml: 1,
                                        mt: 1,
                                    }}
                                >
                                    <EmailIcon sx={{ fontSize: "20px" }} />
                                    <Typography sx={{ fontSize: "15px" }} component="div">
                                        Email Support
                                    </Typography>
                                </Container>
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        ml: 4,
                                        textDecoration: "underline",
                                        mt: 1,
                                    }}
                                >
                                    Explore Features
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontWeight: "bold" }}
                                    variant="h5"
                                    component="div"
                                >
                                    Standard
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, textDecoration: "line-through", color: "red" }}
                                    color="text.secondary"
                                >
                                    $ 189.99/mo
                                </Typography>
                                <Typography variant="h5" component="div">
                                    $ 99.99/mo
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: "#ff707c", mt: 1 }}
                                    size="small"
                                >
                                    Get Started
                                </Button>
                                <Divider sx={{ mt: 2, mb: 1 }} />
                                <Typography>what you'll get:</Typography>
                                <Container
                                    sx={{
                                        padding: "0 !important",
                                        display: "flex",
                                        alignItems: "center",
                                        ml: 1,
                                        mt: 1,
                                    }}
                                >
                                    <PersonIcon sx={{ fontSize: "20px" }} />
                                    <Typography sx={{ fontSize: "15px" }} component="div">
                                        Upto 50 Users
                                    </Typography>
                                </Container>
                                <Container
                                    sx={{
                                        padding: "0 !important",
                                        display: "flex",
                                        alignItems: "center",
                                        ml: 1,
                                        mt: 1,
                                    }}
                                >
                                    <BackupIcon sx={{ fontSize: "20px" }} />
                                    <Typography sx={{ fontSize: "15px" }} component="div">
                                        Upto 60gb Storage
                                    </Typography>
                                </Container>
                                <Container
                                    sx={{
                                        padding: "0 !important",
                                        display: "flex",
                                        alignItems: "center",
                                        ml: 1,
                                        mt: 1,
                                    }}
                                >
                                    <EmailIcon sx={{ fontSize: "20px" }} />
                                    <Typography sx={{ fontSize: "15px" }} component="div">
                                        Email+Chat Support
                                    </Typography>
                                </Container>
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        ml: 4,
                                        textDecoration: "underline",
                                        mt: 1,
                                    }}
                                >
                                    Explore Features
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontWeight: "bold" }}
                                    variant="h5"
                                    component="div"
                                >
                                    Premium
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, textDecoration: "line-through", color: "red" }}
                                    color="text.secondary"
                                >
                                    $ 389.99/mo
                                </Typography>
                                <Typography variant="h5" component="div">
                                    $ 199.99/mo
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: "#b85cff", mt: 1 }}
                                    size="small"
                                >
                                    Get Started
                                </Button>
                                <Divider sx={{ mt: 2, mb: 1 }} />
                                <Typography>what you'll get:</Typography>
                                <Container
                                    sx={{
                                        padding: "0 !important",
                                        display: "flex",
                                        alignItems: "center",
                                        ml: 1,
                                        mt: 1,
                                    }}
                                >
                                    <PersonIcon sx={{ fontSize: "20px" }} />
                                    <Typography sx={{ fontSize: "15px" }} component="div">
                                        Upto 75 Users
                                    </Typography>
                                </Container>
                                <Container
                                    sx={{
                                        padding: "0 !important",
                                        display: "flex",
                                        alignItems: "center",
                                        ml: 1,
                                        mt: 1,
                                    }}
                                >
                                    <BackupIcon sx={{ fontSize: "20px" }} />
                                    <Typography sx={{ fontSize: "15px" }} component="div">
                                        Upto 100gb Storage
                                    </Typography>
                                </Container>
                                <Container
                                    sx={{
                                        padding: "0 !important",
                                        display: "flex",
                                        alignItems: "center",
                                        ml: 1,
                                        mt: 1,
                                    }}
                                >
                                    <EmailIcon sx={{ fontSize: "20px" }} />
                                    <Typography sx={{ fontSize: "15px" }} component="div">
                                        Email+Chat+Whatsapp Support
                                    </Typography>
                                </Container>
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        ml: 4,
                                        textDecoration: "underline",
                                        mt: 1,
                                    }}
                                >
                                    Explore Features
                                </Typography>
                            </CardContent>
                        </Card>
                    </Container>

                    <Container sx={style.dashboardList2Container}>
                        <Card sx={{
                            minWidth: 275, width: {
                                lg: '500px',
                                md: '500px',
                                sm: '270px',
                            }
                        }}>
                            <CardContent>
                                <Stack direction={{
                                    lg: 'row',
                                    mg: 'row',
                                    sm: 'column',
                                }}>
                                    <Stack direction="column" sx={{ width: "270px" }}>
                                        <Box
                                            sx={{
                                                backgroundColor: "#7cf280",
                                                borderRadius: "40px",
                                                alignItems: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                width: "100px",
                                            }}
                                        >
                                            Free Forever
                                        </Box>
                                        <Typography
                                            sx={{ fontWeight: "bold" }}
                                            variant="h5"
                                            component="div"
                                        >
                                            Free Started
                                        </Typography>
                                        <Typography sx={{ fontSize: "15px" }}>
                                            The quickest and easiest way to try Protocols with Basic
                                            Functionalities
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{ backgroundColor: "#7cf280", mt: 1, width: "150px" }}
                                            size="small"
                                        >
                                            Get Started
                                        </Button>
                                    </Stack>
                                    <Stack sx={{ ml: 1 }} direction="column">
                                        <Typography>what you'll get:</Typography>
                                        <Container
                                            sx={{
                                                padding: "0 !important",
                                                display: "flex",
                                                alignItems: "center",
                                                mt: 1,
                                            }}
                                        >
                                            <PersonIcon sx={{ fontSize: "20px" }} />
                                            <Typography sx={{ fontSize: "15px" }} component="div">
                                                Upto 8 Users
                                            </Typography>
                                        </Container>
                                        <Container
                                            sx={{
                                                padding: "0 !important",
                                                display: "flex",
                                                alignItems: "center",
                                                mt: 1,
                                            }}
                                        >
                                            <BackupIcon sx={{ fontSize: "20px" }} />
                                            <Typography sx={{ fontSize: "15px" }} component="div">
                                                Upto 3gb Storage
                                            </Typography>
                                        </Container>
                                        <Container
                                            sx={{
                                                padding: "0 !important",
                                                display: "flex",
                                                alignItems: "center",
                                                mt: 1,
                                            }}
                                        >
                                            <EmailIcon sx={{ fontSize: "20px" }} />
                                            <Typography sx={{ fontSize: "15px" }} component="div">
                                                Email Support
                                            </Typography>
                                        </Container>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>

                        <Card sx={{
                            minWidth: 275, width: {
                                lg: '500px',
                                md: '500px',
                                sm: '270px',
                            }
                        }}>
                            <CardContent>
                                <Stack direction={{
                                    lg: 'row',
                                    mg: 'row',
                                    sm: 'column',
                                }}>
                                    <Stack direction="column" sx={{ width: "270px" }}>
                                        <Box
                                            sx={{
                                                backgroundColor: "#8cceed",
                                                borderRadius: "40px",
                                                alignItems: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                width: "100px",
                                            }}
                                        >
                                            Let's connect
                                        </Box>
                                        <Typography
                                            sx={{ fontWeight: "bold" }}
                                            variant="h5"
                                            component="div"
                                        >
                                            Enterprise Plan
                                        </Typography>
                                        <Typography sx={{ fontSize: "15px" }}>
                                            Effortlessly costumise and fine-tune services as your
                                            needs shift, ensuring the perfect tools for success
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{ backgroundColor: "#8cceed", mt: 1, width: "150px" }}
                                            size="small"
                                        >
                                            Contact Us
                                        </Button>
                                    </Stack>
                                    <Stack sx={{ ml: 2 }} direction="column">
                                        <Typography>what you'll get:</Typography>
                                        <Container
                                            sx={{
                                                padding: "0 !important",
                                                display: "flex",
                                                alignItems: "center",
                                                mt: 1,
                                            }}
                                        >
                                            <PersonIcon sx={{ fontSize: "20px" }} />
                                            <Typography sx={{ fontSize: "15px" }} component="div">
                                                Upto 75 Users
                                            </Typography>
                                        </Container>
                                        <Container
                                            sx={{
                                                padding: "0 !important",
                                                display: "flex",
                                                alignItems: "center",
                                                mt: 1,
                                            }}
                                        >
                                            <BackupIcon sx={{ fontSize: "20px" }} />
                                            <Typography sx={{ fontSize: "15px" }} component="div">
                                                Upto 100gb Storage
                                            </Typography>
                                        </Container>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Container>
                </Stack>
            </Container>
        </>
    );
}

export default Dashboard;
