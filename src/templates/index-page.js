import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import * as ReactScroll from 'react-scroll';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import mat from '../img/floor.png'
import backgroundHeader from '../img/background-header.svg'

const ScrollLink = ReactScroll.Link;

export default class IndexPageTemplate extends React.Component{
  constructor() {
    super()
    this.state = {
      value: 'hemstädning'
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const {title, content, contentComponent } = this.props;
    const PageContent = contentComponent || Content;

  return (
    <article className='index page'>
      <div className='page-header-container'>
        <header className='page-header'>
          <h1 className='page-title'>
            Hushållsnära tjänster<br />som gör skillnad, <br />inte bara hemma hos dig.
          </h1>
          <div className='page-description'>
            <p>Vi tror på förändring, förändring mot något gott erbjuder städ och andra hushållsnära tjänster för privatpersoner och företag i Stockholmsregionen. Våra tjänster berättigar RUT-avdrag.</p>
            <p><ScrollLink className='scroll-link' to={'intro'} smooth={true} duration={500}>Läs mer om oss</ScrollLink> eller <ScrollLink className='scroll-link' to={'contact'} smooth={true} duration={500}>gör en prisförfrågan</ScrollLink></p>
          </div>
        </header>
        <div className='header-background'  style={{background: 'url(' + backgroundHeader + ') no-repeat center bottom / cover'}} />
      </div>
      <div className='page-sections-container'>
        <section className='page-section intro' id='intro' style={{background: 'repeat center top/15% url(' + mat + ') #ffe8bb'}}>
          <div className='content'>
            <h2>Vad vi gör</h2>
            <p>Städning hemma eller på kontoret. Genom att anlita skapar ni också långsiktig förändring för våra anställda. Flyttstädning eller Vi erbjuder städ och andra hushållsnära tjänster för privatpersoner och företag. Våra tjänster berättigar till RUT och ROT-avdrag.</p>
            <ul className='intro-items'>
              <li className='intro-item'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='intro-image'><title>cirkel</title><path d="M256,510A254,254,0,0,1,76.4,76.4,254,254,0,0,1,435.61,435.61,252.36,252.36,0,0,1,256,510Z" style={{fill: '#faf3d1'}}/><path d="M256,4A251.92,251.92,0,0,1,434.19,434.19,252,252,0,1,1,157.91,23.8,250.44,250.44,0,0,1,256,4m0-4C114.62,0,0,114.62,0,256S114.62,512,256,512,512,397.38,512,256,397.38,0,256,0Z" style={{fill: '#faf3d1'}}/></svg>
                <h3>Lite dyrare men inte för dyrt.</h3>
                <p>Vi erbjuder städ och andra hushållsnära tjänster för privatpersoner och företag. Från <strong>156 kr/h</strong>. Våra tjänster berättigar till RUT och ROT-avdrag.</p>
              </li>
              <li className='intro-item'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='intro-image'><title>cirkel</title><path d="M256,510A254,254,0,0,1,76.4,76.4,254,254,0,0,1,435.61,435.61,252.36,252.36,0,0,1,256,510Z" style={{fill: '#faf3d1'}}/><path d="M256,4A251.92,251.92,0,0,1,434.19,434.19,252,252,0,1,1,157.91,23.8,250.44,250.44,0,0,1,256,4m0-4C114.62,0,0,114.62,0,256S114.62,512,256,512,512,397.38,512,256,397.38,0,256,0Z" style={{fill: '#faf3d1'}}/></svg>
                <h3>Vi har kollektivavtal</h3>
                <p>Vi erbjuder städ och andra hushållsnära tjänster för privatpersoner och företag. Våra tjänster berättigar till RUT och ROT-avdrag.</p>
              </li>
              <li className='intro-item'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='intro-image'><title>cirkel</title><path d="M256,510A254,254,0,0,1,76.4,76.4,254,254,0,0,1,435.61,435.61,252.36,252.36,0,0,1,256,510Z" style={{fill: '#faf3d1'}}/><path d="M256,4A251.92,251.92,0,0,1,434.19,434.19,252,252,0,1,1,157.91,23.8,250.44,250.44,0,0,1,256,4m0-4C114.62,0,0,114.62,0,256S114.62,512,256,512,512,397.38,512,256,397.38,0,256,0Z" style={{fill: '#faf3d1'}}/></svg>
                <h3>Miljö & utbildning</h3>
                <p>Vi erbjuder städ och andra hushållsnära tjänster för privatpersoner och företag. Våra tjänster berättigar till RUT och ROT-avdrag.</p>
              </li>
              <li className='intro-item'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='intro-image'><title>cirkel</title><path d="M256,510A254,254,0,0,1,76.4,76.4,254,254,0,0,1,435.61,435.61,252.36,252.36,0,0,1,256,510Z" style={{fill: '#faf3d1'}}/><path d="M256,4A251.92,251.92,0,0,1,434.19,434.19,252,252,0,1,1,157.91,23.8,250.44,250.44,0,0,1,256,4m0-4C114.62,0,0,114.62,0,256S114.62,512,256,512,512,397.38,512,256,397.38,0,256,0Z" style={{fill: '#faf3d1'}}/></svg>
                <h3>Miljö & utbildning</h3>
                <p>Vi erbjuder städ och andra hushållsnära tjänster för privatpersoner och företag. Våra tjänster berättigar till RUT och ROT-avdrag.</p>
              </li>              
            </ul>
          </div>
        </section>
        <section className='page-section faq' style={{background: 'repeat top/10% url(' + mat + ') #99eebb'}}>
          <div className='content'>
            <h2>Vanliga frågor</h2>
            <p>Här nedan har vi samlat några vanliga frågor och svar om oss. Om ni inte hittar svaret ni letar efter kan ni självklart också <a href='mailto:anna@forandringen.nu'>mejla oss</a>.</p>
            <ExpansionPanel>
              <ExpansionPanelSummary>Vilka är ni som arbetar med Förändringen?</ExpansionPanelSummary>
              <ExpansionPanelDetails>Lolegsorhsophsrop lorem ipsum</ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary>Hur fungerar det med rutavdrag?</ExpansionPanelSummary>
              <ExpansionPanelDetails>Lolegsorhsophsrop posrrposrkhpo</ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary>Är ni verksamma i andra städer än Stockholm?</ExpansionPanelSummary>
              <ExpansionPanelDetails>Lolegsorhsophsrop aafa</ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </section>        
        <section className='page-section contact' id='contact'>
          <div className='content'>
            <div className='contact-form'>
              <h2>Skicka prisförfrågan</h2>
                <form autoComplete='off'>
                  <FormControl component="fieldset">
                  <FormLabel component="legend">Jag är intresserad av</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
            <FormControlLabel value="hemstädning" control={<Radio />} label="Hemstädning" />
            <FormControlLabel value="flyttstädning" control={<Radio />} label="Flyttstäd" />
            <FormControlLabel value="kontorsstädning" control={<Radio />} label="Kontorsstäd" />
          </RadioGroup>
        </FormControl>

                  <TextField
                    id='fullname'
                    name='fullname'
                    label='Namn'
                    margin='normal'
                    required
                    fullWidth={true}
                  />
                  <TextField
                    id='email'
                    name='email'
                    label='E-postadress'
                    margin='normal'
                    required
                    fullWidth={true}
                  />
                  <TextField
                    id='postnumber'
                    name='postnumber'
                    label='Postnummer'
                    margin='normal'
                    type='number'
                    required
                  />                  
                  <TextField
                    id='squaremeters'
                    name='squaremeters'
                    label='Jag bor på'
                    required
                    type='number'
                    margin='normal'
                    InputProps={{endAdornment: <InputAdornment position="end">m<sup>2</sup></InputAdornment>}}
                  />
                  <TextField
                    id='message'
                    name='message'
                    label='Ev. meddelande'
                    margin='normal'
                    multiline
                    rows='3'
                    rowsMax='10'
                    fullWidth={true}
                  />              
                  <Button variant="raised" color="primary" type="submit" fullWidth={true} margin='normal'>Skicka</Button>

                </form>
            </div>
            <div className='contact-details'>
              <section>
                <h3>Du kan självklart också mejla din förfrågan till</h3>
                <p><a href='mailto:anna@forandringen.nu'>anna@forandringen.nu</a></p>
              </section>
              <section>
                <h3>Eller ringa oss på</h3>
                <p><a href='tel:08-32 0003030'>08-32 0003030</a></p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
