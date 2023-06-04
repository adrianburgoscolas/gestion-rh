import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

//Styled Breadcrumb Links
const StyledLink = styled(Link)({
  '&.MuiLink-root': {
    textDecoration: 'none',
    color: '#464646',
  },
  '&:hover': {
    textDecoration: 'underline',
  }
});

//Styled breadcrumb text
const StyledBreadcrumbTypo = styled(Typography)({
    textAlign: 'left',
    font: 'normal normal normal 14px/24px Poppins',
    letterSpacing: '0px',
    color: '#464646',
    opacity: '1',
});

//Styled breadcrumb active text
const StyledBreadcrumbActiveTypo = styled(Typography)({
    textAlign: 'left',
    font: 'normal normal medium 14px/24px Poppins',
    letterSpacing: '0px',
    color: '#4F2D80',
    opacity: '1',
});

export default function NavBreadcrumbs({nav, path}:{nav: string, path: string[]}) {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{marginLeft: '22px'}}>
      {
        path.map((link, i) =>(
          <StyledLink key={link + i} href={`/#${link.toLowerCase()}`}>
            <StyledBreadcrumbTypo>
              {link}
            </StyledBreadcrumbTypo>
          </StyledLink>
        ))
      }
      <StyledBreadcrumbActiveTypo>{nav}</StyledBreadcrumbActiveTypo>
    </Breadcrumbs>
  );
}
