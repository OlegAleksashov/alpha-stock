import React, {ReactNode, FC} from 'react';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import MContainerStyle from './MContainer.styles';


interface IMContainer {
    children: ReactNode;
}

const MContainer: FC<IMContainer>= ({children}) => {
    const theme = useTheme()
    const styles = MContainerStyle(theme)
  return (
    <Container maxWidth={false} sx={styles.container} disableGutters>{children}</Container>
  )
}

export default MContainer