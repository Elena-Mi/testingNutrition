import LoaderPage from './Loader/LoaderPage'
import Nutrition from './Nutrition'
import { useEffect } from 'react'
import { useState } from 'react'
import NutritionTitle from './NutritionTitle';
import ContactForm from './ContactForm';



function Home () {

    const [getLoader, setGetLoader] = useState(false)

		// чтобы получить доступ к информауии и калориям
		const [nutrition, setNutrition] = useState()

		// что вводит пользовательно доступ
		const [mySearch, setMySearch] = useState()

		// запрос пр  нажатии на кнопку
		const [wordSubmitted, setWordSubmitted] = useState('')

		const MY_ID = 'c22f0c1d'
		const MY_KEY = '6230e1b33ab2a2af4dbd987a3302f5dd'
		const MY_URL = 'https://api.edamam.com/api/nutrition-details'

		// запрос
		const fetchAnalysis = async vitam => {
			setGetLoader(true)

			const response = await fetch(
				`${MY_URL}?app_id=${MY_ID}&app_key=${MY_KEY}`,
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ ingr: vitam }),
				}
			)

			if (response.ok) {
				// условие
				setGetLoader(false)
				const data = await response.json()
				console.log(data)
				setNutrition(data)
			} else {
				setGetLoader(false)
				alert('Incorrect! Type correct ingredients,please')
			}
		}
		// Чтобы страница не перезагружалась и меняем состояние
		const finalSearch = e => {
			e.preventDefault()
			setWordSubmitted(mySearch)
		}

		const myRecipeSearch = e => {
			setMySearch(e.target.value)
		}

		//  ???разделение строк??смотрть тетрадь js
		useEffect(() => {
			if (wordSubmitted !== '') {
				let vitam = wordSubmitted.split(/[,,;,\n,\r]/);
				fetchAnalysis(vitam);
			}
		}, [wordSubmitted])
  return (
		<div>
			{getLoader && <LoaderPage />}

			<NutritionTitle />

			<div className='analys__container'>
				<h2 className='analys_title'>Let's do analysis</h2>

				<form onSubmit={finalSearch}>
					<input
						className='analys_input'
						type='text'
						placeholder='Search...'
						onChange={myRecipeSearch}
						value={mySearch}
					/>

					<button onClick={finalSearch} type='submit' className='analys_btn'>
						Search
					</button>
				</form>
			</div>

			<div className='calories'>
				{nutrition && <p className='calories_p'> {nutrition.calories} kcal</p>}

				{nutrition &&
					Object.values(nutrition.totalNutrients).map(
						({ label, quantity, unit, index }) => (
							<Nutrition
								label={label}
								quantity={quantity}
								unit={unit}
								key={index}
							/>
						)
					)}
			</div>
			<ContactForm/>
		</div>
	)
}
export default Home;