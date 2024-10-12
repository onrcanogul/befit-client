import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Register = () => {
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

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

                <TextField label="Name" color="success" fullWidth style={{ marginBottom: "15px" }} />
                <TextField label="Surname" color="success" fullWidth style={{ marginBottom: "15px" }} />
                <TextField label="Username" color="success" fullWidth style={{ marginBottom: "15px" }} />
                <TextField label="Email" color="success" type="email" fullWidth style={{ marginBottom: "15px" }} />
                <TextField label="Password" color="success" type="password" fullWidth style={{ marginBottom: "15px" }} />
                <TextField label="Confirm Password" color="success" type="password" fullWidth style={{ marginBottom: "15px" }} />

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
                            fontSize: "clamp(14px, 1vw, 16px)", // Responsive font-size
                            flex: 1,
                            marginRight: "10px", // Spacing between buttons
                        }}
                    >
                        Register
                    </Button>
                    <Button
                        variant="outlined"
                        color="warning"
                        style={{
                            height: "3em",
                            fontSize: "clamp(14px, 1vw, 16px)", // Responsive font-size
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
