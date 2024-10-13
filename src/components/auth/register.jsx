import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {register} from "../../services/authService";
import {toast} from "material-react-toastify";

export const Register = () => {
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");


    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleClick = async () => {
        await register(name, surname, age, userName, email, password, confirmPassword, gender);
    }

    return (
        <div className={"quote"} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: '20px' }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "500px",
                    padding: "20px",
                    backgroundColor: "#fff",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    borderRadius: "8px"
                }}
            >
                <Typography variant={"h4"} style={{ marginBottom: "20px", color: "#2e7d32" }}>Register</Typography>

                <TextField label="Name" color="success" value={name} fullWidth style={{ marginBottom: "15px" }} onChange={(e) => setName(e.target.value)} />
                <TextField label="Surname" color="success" value={surname} fullWidth style={{ marginBottom: "15px" }} onChange={(e) => setSurname(e.target.value)} />
                <TextField label="Username" color="success" value={userName} fullWidth style={{ marginBottom: "15px" }} onChange={(e) => setUserName(e.target.value)} />
                <TextField label="Email" color="success" type="email" value={email} fullWidth style={{ marginBottom: "15px" }} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" color="success" type="password" value={password} fullWidth style={{ marginBottom: "15px" }} onChange={(e) => setPassword(e.target.value)} />
                <TextField label="Confirm Password" color="success" type="password" value={confirmPassword} fullWidth style={{ marginBottom: "15px" }} onChange={(e) => setConfirmPassword(e.target.value)} />

                <TextField
                    label="Age"
                    color="success"
                    type="number"
                    fullWidth
                    value={age}
                    onChange={handleAgeChange}
                    style={{ marginBottom: "15px", width: "100%" }}
                />

                <FormControl fullWidth style={{ marginBottom: "15px" }}>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                        labelId="gender-label"
                        id="gender-select"
                        value={gender}
                        onChange={handleGenderChange}
                        label="Gender"
                    >
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                </FormControl>

                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        variant="contained"
                        color="success"
                        style={{
                            height: "3em",
                            fontSize: "clamp(14px, 1vw, 16px)",
                            flex: 1,
                            marginRight: "10px",
                        }}
                        onClick={handleClick}
                    >
                        Register
                    </Button>
                    <Button
                        variant="outlined"
                        color="warning"
                        style={{
                            height: "3em",
                            fontSize: "clamp(14px, 1vw, 16px)",
                            flex: 1,
                        }}
                    >
                        Forgot Password
                    </Button>
                </div>
            </div>
        </div>
    );
}
