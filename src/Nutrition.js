export const Nutrition = ({ label, quantity, unit, index }) => {
	return (
		<div className="nutrition_div">
			<p key={index} className="nutrition_p">
				<b className="label" >{label}</b> - {quantity} {unit}
			</p>
		</div>
	)
}
export default Nutrition;