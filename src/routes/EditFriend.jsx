import { useParams } from "react-router-dom"


const EditFriend = () => {
	const { id } = useParams()
	console.log('EditFriend: valde vän med id=', id, typeof id);

	return (
		<section className="form">
			<div> <input type="text" defaultValue="Bosse Bengtsson" /> </div>
			<div> <input type="text" defaultValue="bosse@mail.com" /> </div>
			<button> Spara </button>

		</section>
	)
}

export default EditFriend
