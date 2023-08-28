import React from "react";
import { useForm, FieldValues } from "react-hook-form";

interface Formdata {
  name: string;
  age: number;
}

function Form() {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Formdata>();

  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: "",
  //   });

  //   const handleSubmit: (e: FormEvent) => void = (e) => {
  //     e.preventDefault();
  //     // if (nameRef.current !== null) {
  //     //   console.log(nameRef.current.value);
  //     // }

  //     // if (ageRef.current !== null) {
  //     //   console.log(ageRef.current.value);
  //     // }
  //     console.log(person);
  //   };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // ref={nameRef}
          type="text"
          className="form-control"
          id="name"
          //   onChange={(e) => setPerson({ ...person, name: e.target.value })}
          //   value={person.name}
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The Name field is Required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            The Name should be atleast Min Length of 3 chars
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          //   ref={ageRef}
          id="age"
          type="number"
          //   name=""
          className="form-control"
          //   onChange={(e) => setPerson({ ...person, age: e.target.value })}
          //   value={person.age}
          {...register("age")}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Form;
