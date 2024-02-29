import ContactForm from "./ContactForm";


function About () {
    return (
			<div>
				<div className='container__BLOCK'>
					<h2 className='container_title'>Discover your nutrition</h2>

					<p className='container_text'>
						<b>
							This APP encourages you to not just count your calories but to
							focus on your nutrition as a whole One of the key factors that
							sets
						</b>
            <br />
            <br />
						Factor 75 apart is its commitment to providing balanced nutrition.
						Each meal is carefully crafted to ensure that it contains the right
						balance of macronutrients – carbohydrates, proteins, and fats – as
						well as essential vitamins and minerals. This approach is based on
						scientific research that shows the importance of consuming a
						balanced diet for optimal health
					</p>
				</div>
				<ContactForm/>
       
			</div>
		)
}
export default About;