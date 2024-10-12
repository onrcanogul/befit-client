import TextField from "@mui/material/TextField";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Login = () => {
    return (
        <div className={"quote"} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: '20px', backgroundColor: '#f4f4f4' }}>
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
                <Typography variant={"h4"} style={{ marginBottom: "20px", color: "#2e7d32" }}>Login</Typography>


                <div style={{ width: "100%", marginBottom: "15px" }}>
                    <TextField
                        label="Email or Username"
                        color="success"
                        fullWidth
                        style={{ marginBottom: "15px" }}
                    />
                    <TextField
                        label="Password"
                        color="success"
                        type="password"
                        fullWidth
                        style={{ marginBottom: "10px" }}
                    />
                    <FormControlLabel
                        control={<Checkbox color="success" defaultChecked />}
                        label="Remember Me"
                        style={{ marginBottom: "15px" }}
                    />
                </div>

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
                        Login
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
