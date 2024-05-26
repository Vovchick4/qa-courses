import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Box, Typography, TextField } from '@mui/material';

// Створення схеми валідації з використанням Zod
const schema = z.object({
    username: z.string().min(1, 'Ім\'я користувача обов\'язкове'),
    email: z.string().email('Неправильний формат електронної пошти'),
    password: z.string().min(6, 'Пароль повинен містити щонайменше 6 символів'),
    confirmPassword: z.string().min(6, 'Підтвердження паролю повинно містити щонайменше 6 символів')
}).refine(data => data.password === data.confirmPassword, {
    message: 'Паролі не співпадають',
    path: ['confirmPassword'],
});

type FormData = z.infer<typeof schema>

export default function RegisterPage() {
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
                Створити аккаунт
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ gap: 20, display: 'flex', flexDirection: 'column' }} action="">
                <TextField
                    fullWidth
                    id="username"
                    label="Ваше ім'я користувача"
                    variant="outlined"
                    {...register('username')}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                />
                <TextField
                    fullWidth
                    id="email"
                    label="E-mail"
                    variant="outlined"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
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
                <TextField
                    fullWidth
                    id="confirmPassword"
                    label="Ще раз пароль"
                    variant="outlined"
                    type="password"
                    {...register('confirmPassword')}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                />
                <LoadingButton type="submit" variant='contained'>
                    Пітдвердити
                </LoadingButton>
            </form>
        </Box>
    )
}
