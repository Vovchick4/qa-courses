import { Fragment } from "react";
import { Box, Button, Container, IconButton, Typography, colors } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function HomePage() {
    return (
        <Fragment>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    height: '100%',
                    width: '100%',
                    minHeight: 'calc(100dvh - 69px)',
                    backdropFilter: 'brightness(40%)',
                    backgroundImage: "url('../root.jpg')",
                }}
            >
                <Box sx={{ position: 'absolute', inset: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: -1 }} />
                <Container maxWidth="xl">
                    <Box sx={{
                        color: 'white',
                        borderRadius: 10,
                        backdropFilter: 'blur(5px)',
                        backgroundColor: 'rgba(255,255,255,0.3)'
                    }}>
                        <Typography fontSize={83} p={2}>
                            XCurses - Найкращі QA курси у всій Україні
                        </Typography>
                    </Box>
                    <Button size="large" variant="contained" color="warning" sx={{ mt: 5, fontSize: 40 }}>Перейти до курсів</Button>
                </Container>
                <IconButton
                    href="#about-us"
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        bottom: 2,
                        transform: 'translateX(-50%)'
                    }}
                    size="large"
                >
                    <KeyboardArrowDownIcon color="warning" sx={{ fontSize: 143 }} />
                </IconButton>
            </Box>

            <Box id="about-us" component="article">
                <Container maxWidth="xl">
                    <Typography textAlign='center' fontSize={38} p={2}>
                        Коротко про нас
                    </Typography>
                    <Box component="ol" sx={{ gap: 10, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))', fontSize: 50, color: colors['orange'][400] }}>
                        <Box component="li">
                            <Typography sx={{ color: '#000' }} fontSize={34} p={2}>
                                Хто ми?
                            </Typography>
                            <Typography sx={{ color: '#000' }} fontSize={27} p={2}>
                                Ми - команда професіоналів з багаторічним досвідом у сфері тестування програмного забезпечення. Наші курси допоможуть вам здобути практичні навички та знання, необхідні для успішної кар'єри в IT.
                            </Typography>
                        </Box>
                        <Box component="li" sx={{ transform: 'translateY(200px)' }}>
                            <Typography sx={{ color: '#000' }} fontSize={34} p={2}>
                                Наші цілі
                            </Typography>
                            <Typography sx={{ color: '#000' }} fontSize={27} p={2}>
                                Ми прагнемо підготувати фахівців, які будуть готові до викликів сучасного ринку праці. Наші курси орієнтовані на реальні проекти та практичні завдання, що допомагають опанувати всі аспекти тестування.
                            </Typography>
                        </Box>
                        <Box component="li" sx={{ transform: 'translateY(200px)' }}>
                            <Typography sx={{ color: '#000' }} fontSize={34} p={2}>
                                Наш підхід
                            </Typography>
                            <Typography sx={{ color: '#000' }} fontSize={27} p={2}>
                                Ми пропонуємо індивідуальний підхід до кожного студента, забезпечуючи підтримку та наставництво на кожному етапі навчання. Всі наші викладачі - досвідчені практики, готові поділитися своїм досвідом та знаннями.
                            </Typography>
                        </Box>
                        <Box component="li" sx={{ transform: 'translateY(400px)' }}>
                            <Typography sx={{ color: '#000' }} fontSize={34} p={2}>
                                Чому ми?
                            </Typography>
                            <Typography sx={{ color: '#000' }} fontSize={27} p={2}>
                                Наші випускники працюють у провідних IT-компаніях та отримують високі відгуки від роботодавців. Ми гарантуємо, що ви отримаєте необхідні знання та навички для успішної кар'єри в тестуванні програмного забезпечення.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Fragment>
    )
}
