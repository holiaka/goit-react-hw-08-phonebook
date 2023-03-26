import { Button} from '@chakra-ui/react'

export const About = () => {
  return (
    <>
      <h1> Hello everybody!</h1>
      <p>
        I created this project within the React course at the GOIT school. If
        you see any defect or bug, or you have suggestions on how something can
        be done better, you can contact me by e-mail or by phone. Contact
        details are listed at the bottom of the site pages.
      </p>
      <Button type="button" colorScheme='teal' variant='outline'>Try now!</Button>
    </>
  );
};
