import { Container } from "react-bootstrap"
import useAuth from "../../hook/useAuth";
import { useForm } from "react-hook-form";
import './addTourplace.css';

const AddTourPlace = () => {

    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch("http://localhost:5000/tourService", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledged) {
                    alert('data send');
                    reset()
                }
            });


        console.log(data);
    };



    return (
        <div className="add-tour">
            <h1 className="text-center title">ADD TOUR SPOT</h1>
            <Container className="form-body">
                <form onSubmit={handleSubmit(onSubmit)} className="addTourSpot-form">
                    <input required placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                    <input required type="email" placeholder="Email" value={user?.email} {...register("email")} />
                    <input required placeholder="image link" {...register("image")} />
                    <input required placeholder="price" {...register("price")} />
                    <input required type="number" placeholder="Trip day" {...register("tripday")} />
                    <input required placeholder="Deception" {...register("dec")} />
                    <input type="submit" placeholder="Add Tour Spot" />
                </form>
            </Container>
        </div>
    )
}

export default AddTourPlace