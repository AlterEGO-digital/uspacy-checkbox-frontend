import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { DOMAIN } from '../../helpers';
import { useUserSettingsContext } from '../../Providers';

const Description = () => {
	const theme = useTheme();
	const { userSettings } = useUserSettingsContext();
	const { t } = useTranslation('settings');
	const instructionLink = useMemo(() => {
		switch (userSettings?.lang) {
			case 'uk':
				return 'https://docs.google.com/document/d/12IcwCiITmiJGmikvMVE6YMa-dn1wf2ee_y7DJKGhUWM';
			case 'pt-BR':
				return 'https://docs.google.com/document/d/1aEt9MrpkUe8pHvaNkykeRK5qoVxjCQnXs5LGseo6BM8';
			case 'pl':
				return 'https://docs.google.com/document/d/1H1PHLLYKB_N7eTgniAsGZ0N-DDy0pP6L_FegsJ02sFQ';
			default:
				return 'https://docs.google.com/document/d/10Fcn4uIXPp9AFq_FuNOPQ_ZLBMMlff9XvoV27H2IxBc';
		}
	}, [userSettings?.lang]);
	return (
		<Box
			sx={{
				marginTop: '15px',
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				'& a': {
					textDecoration: 'none',
					color: theme.palette.primary.main,
				},
				'& p': {
					fontSize: '14px',
					color: theme.palette.text.secondary,
				},
			}}
		>
			<Typography
				sx={{
					fontSize: '16px !important',
					fontWeight: '800 !important',
					color: `${theme.palette.text.primary} !important`,
				}}
			>
				{t('forApplicationSettings')}:
			</Typography>
			<Typography>
				{t('downloadOpencartPlugin')}
				<a download href={`${DOMAIN}/alteregouspacyintegrations.ocmod.zip`}>
					alterego-uspacy-integrations
				</a>
			</Typography>
			<Typography>
				{t('installPluginOnSite')}
				<br />
				{t('instructionsForWordPress')}{' '}
				<a href={instructionLink} target="_blank" rel="noreferrer">
					{t('here')}
				</a>
			</Typography>
			<Typography>{t('pluginSettingsSpecifySecretKey')}</Typography>
			<Typography>
				{t('isThereNotEnoughFunctionalityForIntegration')}
				<br />
				{t('teamIsInTouch')} –<a href="tel:+380507007572"> +38 050 700 75 72</a> {t('or')}
				<a href="mailto:y.andrusyak@alterego.digital"> y.andrusyak@alterego.digital</a>
			</Typography>
		</Box>
	);
};

export default Description;
