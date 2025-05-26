import { Card, CardContent, CardHeader, Typography } from "@mui/material";
interface TextCardProps {
    children: string;
}
export default function TextCard({ children }: TextCardProps) {
    return (
        <Card
            variant="outlined"
            sx={{
                width: "100%",
                maxWidth: { xs: 300, sm: 350, md: 400 },
                background: "linear-gradient(45deg,#FC6C85,#FFDAB9)",
                transition:
                    "box-shadow 0.3s ease-in-out, transform 0.3s ease-out",
                "&:hover": {
                    boxShadow: 6,
                    transform: "scale(1.02)",
                },
            }}
        >
            <CardHeader
                title="Shrimp and Chorizo Paella"
                slotProps={{
                    title: {
                        sx: {
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: "clamp(20px, 2vw, 30px)",
                            color: "primary",
                            variant: "h6",
                            fontWeight: 700,
                        },
                    },
                    subheader: {
                        sx: {
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: "clamp(12px, 1.5vw, 18px)",
                        },
                    },
                }}
            />
            <CardContent>
                <Typography
                    variant="body1"
                    sx={{ color: "#333333", fontWeight: 600 }}
                >
                    {children}
                </Typography>
            </CardContent>
        </Card>
    );
}
