import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Box, Typography, TextField } from '@mui/material';

// Створення схеми валідації з використанням Zod
const schema = z.object({
    username_or_email: z.string().min(1, 'Ім\'я користувача обов\'язкове або електрона скринька'),
    password: z.string().min(6, 'Пароль повинен містити щонайменше 6 символів'),
})

type FormData = z.infer<typeof schema>

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormData) => alert(JSON.stringify(data));

    return (
        <Box sx={{ textAlign: 'center', width: 650 }}>
            <Typography variant="h3" gutterBottom sx={{ mb: 5 }}>
                Увійти в адмінку
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ gap: 20, display: 'flex', flexDirection: 'column' }} action="">
                <TextField
                    fullWidth
                    id="username"
                    label="Ваше ім'я користувача або електрона скринька"
                    variant="outlined"
                    {...register('username_or_email')}
                    error={!!errors.username_or_email}
                    helperText={errors.username_or_email?.message}
                />
                <TextField
                    fullWidth
                    id="password"
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <LoadingButton type="submit" variant='contained'>
                    Пітдвердити
                </LoadingButton>
            </form>
        </Box>
    )
}
