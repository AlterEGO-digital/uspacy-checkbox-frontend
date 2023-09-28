import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

import FetchProvider, { useFetchContext } from '../../context/Fetch';
import { useErrorNotification } from '../../hooks/useErrorNotification';
import i18n from '../../i18n';
import Providers from '../../Providers';
// import Description from '../Description';
import Loader from '../Loader';
import { TextFieldStyles } from './styles';
import { IProps } from './types';

const Settings: React.FC<IProps> = () => {
	const { t } = useTranslation('settings');
	const theme = useTheme();
	const { cashierData, loading, logOut, saveSettings } = useFetchContext();
	const { errorNotification } = useErrorNotification();
	const [login, setLogin] = useState('');
	const [pass, setPass] = useState('');
	const [pin, setPin] = useState('');
	const [key, setKey] = useState('');

	useEffect(() => {
		setLogin(cashierData?.cashier_login || '');
		setLogin(cashierData?.cashier_password || '');
		setPin(cashierData?.cashier_pinecode || '');
		setKey(cashierData?.license_key || '');
	}, [cashierData]);

	const handleChangeLogin = (e) => setLogin(e.target.value);
	const handleChangePass = (e) => setPass(e.target.value);
	const handleChangePin = (e) => setPin(e.target.value);
	const handleChangeKey = (e) => setKey(e.target.value);

	const handleSaveSettings = () => {
		if (!key.length || !((login.length && pass.length) || pin.length)) {
			errorNotification(t('validationErr'));
			return;
		}

		const body = {
			...(login.length &&
				pass.length && {
					cashier_login: login,
					cashier_password: pass,
				}),
			...(pin.length &&
				(!login.length || !pass.length) && {
					cashier_pinecode: pin,
				}),
			license_key: key,
		};
		saveSettings(body);
	};

	if (loading)
		return (
			<Box
				sx={{
					height: '500px',
				}}
			>
				<Loader size={100} />
			</Box>
		);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'flex-start',
				padding: '10px 50px',
			}}
		>
			<Box
				sx={{
					fontSize: '16px',
					fontWeight: '800',
					color: theme.palette.text.primary,
					display: 'flex',
					alignItems: 'center',
					fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
				}}
			>
				{t('integration')}:&nbsp;
				{cashierData?.integration_status ? (
					<>
						<Typography sx={{ color: theme.palette.success.light }}>{t('install')}</Typography>
						<Box sx={{ ml: 2, fontWeight: 'normal', cursor: 'pointer' }} onClick={logOut}>
							({t('exit')})
						</Box>
					</>
				) : (
					<Typography sx={{ color: theme.palette.error.light }}>{t('dontInstall')}</Typography>
				)}
			</Box>
			<Box
				sx={{
					gap: '8px',
					alignItems: 'center',
					width: '70%',
					fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
				}}
			>
				<Box sx={{ display: 'flex', width: '100%', mt: 3 }}>
					<Box sx={{ mr: 2 }}>1)</Box>
					<Box sx={{ width: '100%' }}>
						<Box>{t('login')}</Box>
						<TextFieldStyles
							fullWidth
							sx={{
								color: theme.palette.text.disabled,
								background: 'none',
								outline: 'none',
								mt: 1,
							}}
							onChange={handleChangeLogin}
							value={login}
						/>
						<Box sx={{ mt: 1 }}>{t('password')}</Box>
						<TextFieldStyles
							fullWidth
							sx={{
								color: theme.palette.text.disabled,
								background: 'none',
								outline: 'none',
								mt: 1,
							}}
							onChange={handleChangePass}
							value={pass}
						/>
						<Box sx={{ mt: 2 }}>{t('or')}</Box>
						<Box sx={{ mt: 2 }}>{t('pin')}</Box>
						<TextFieldStyles
							fullWidth
							sx={{
								color: theme.palette.text.disabled,
								background: 'none',
								outline: 'none',
								mt: 1,
							}}
							onChange={handleChangePin}
							value={pin}
						/>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', width: '100%', mt: 3 }}>
					<Box sx={{ mr: 2 }}>2)</Box>
					<Box sx={{ width: '100%' }}>
						<Box>{t('key')}</Box>
						<TextFieldStyles
							fullWidth
							sx={{
								color: theme.palette.text.disabled,
								background: 'none',
								outline: 'none',
								mt: 1,
							}}
							onChange={handleChangeKey}
							value={key}
						/>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
					<LoadingButton
						fullWidth
						onClick={handleSaveSettings}
						size="large"
						type="submit"
						variant="contained"
						sx={{
							background: theme.palette.primary.main,
							border: `1px solid ${theme.palette.primary.main}`,
							textTransform: 'initial',
							borderRadius: '5px',
							padding: '5px 7px',
							width: '200px',

							'& .MuiLoadingButton-loadingIndicator': {
								color: theme.palette.primary.main,
							},
						}}
					>
						{t('save')}
					</LoadingButton>
				</Box>
			</Box>
			{/* <Description /> */}
		</Box>
	);
};

const SettingsWrap: React.FC<IProps> = ({ userSettings }) => {
	useEffect(() => {
		i18n.changeLanguage(userSettings?.lang);
	}, [userSettings?.lang]);

	return (
		<React.Suspense>
			<I18nextProvider i18n={i18n}>
				<Providers userSettings={userSettings}>
					<FetchProvider>
						<Settings />
					</FetchProvider>
				</Providers>
			</I18nextProvider>
		</React.Suspense>
	);
};

export default SettingsWrap;
