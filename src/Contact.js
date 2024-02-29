import ContactForm from "./ContactForm"

function Contact() {
	return (
		<div className='main_container_minerals'>
			<div className='minerals'>
				<h2 className='minerals_title'>Vitamins and Minerals</h2>
				<p className='mineral_text_one'>
					Vitamins and minerals boost the immune system, support normal growth
					and development, and help cells and organs do their jobs. For example,
					you've probably heard that carrots are good for your eyes. It's true!
					Carrots are full of substances called carotenoids (pronounced:
					kuh-RAH-teh-noydz) that your body converts into vitamin A, which helps
					prevent eye problems.
				</p>
				<p className='mineral_text_two'>
					Vitamin K helps blood to clot, so cuts and scrapes stop bleeding
					quickly. You'll find vitamin K in green leafy vegetables, broccoli,
					and soybeans. And to have strong bones, you need to eat foods such as
					milk, yogurt, and green leafy vegetables, which are rich in the
					mineral calcium.
				</p>
			</div>
			<div className='main_vitamins_container'>
			
					<h1 className='vitamins_title'>
						How Do I Get the Vitamins and Minerals I Need?
					</h1>
					<p className="vitamins_text">
						Eating well now is especially important because the body needs a
						variety of vitamins and minerals to grow and stay healthy. Eating a
						mix of foods is the best way to get all the vitamins and minerals
						you need each day. Fruits and vegetables, whole grains, low-fat
						dairy products, lean meats, fish, and poultry are the best choices
						for getting the nutrients your body needs. When deciding what to
						eat, check food labels and pick items that are high in vitamins and
						minerals. For example, when choosing drinks, you'll find that a
						glass of milk is a good source of vitamin D, calcium, phosphorous,
						and potassium. A glass of soda, on the other hand, doesn't have any
						vitamins or minerals.
					</p>
				
			</div>
			<ContactForm/>
		</div>
	)
}
export default Contact
