import { Box, Card, Grid, Toolbar, Typography } from "@mui/material"
import U from "../assets/U.jpg"
import ለ from "../assets/ለ.jpg"
import ሐ from "../assets/ሐ.jpg"
import መ from "../assets/መ.jpg"
import ሠ from "../assets/ሠ.jpg"
import ረ from "../assets/ረ.jpg"
import ሰ from "../assets/ሰ.jpg"
import ሸ from "../assets/ሸ.jpg"
import ቀ from "../assets/ቀ.jpg"
import በ from "../assets/በ.jpg"
import ተ from "../assets/ተ.jpg"
import ቸ from "../assets/ቸ.jpg"
import ኀ from "../assets/ኀ.jpg"
import ነ from "../assets/ነ.jpg"
import ኘ from "../assets/ኘ.jpg"
import አ from "../assets/አ.jpg"
import ከ from "../assets/ከ.jpg"
import ኸ from "../assets/ኸ.jpg"
import ወ from "../assets/ወ.jpg"
import ዐ from "../assets/ዐ.jpg"
import ዘ from "../assets/ዘ.jpg"
import ዠ from "../assets/ዠ.jpg"
import የ from "../assets/የ.jpg"
import ደ from "../assets/ደ.jpg"
import ጀ from "../assets/ጀ.jpg"
import ገ from "../assets/ገ.jpg"
import ጠ from "../assets/ጠ.jpg"
import ጨ from "../assets/ጨ.jpg"
import ጰ from "../assets/ጰ.jpg"
import ጸ from "../assets/ጸ.jpg"
import ፀ from "../assets/ፀ.jpg"
import ፈ from "../assets/ፈ.jpg"
import ፐ from "../assets/ፐ.jpg"

const images = [
	{ image: U, text: "U(Ha)" },
	{ image: ለ, text: "ለ(Le)" },
	{ image: ሐ, text: "ሐ(Hameru Ha)" },
	{ image: መ, text: "መ(Me)" },
	{ image: ሠ, text: "ሠ(Se)" },
	{ image: ረ, text: "ረ(Re)" },
	{ image: ሰ, text: "ሰ(Se)" },
	{ image: ሸ, text: "ሸ(She)" },
	{ image: ቀ, text: "ቀ(Ke)" },
	{ image: በ, text: "በ(Be)" },
	{ image: ተ, text: "ተ(Te)" },
	{ image: ቸ, text: "ቸ(Che)" },
	{ image: ኀ, text: "ኀ(Ha)" },
	{ image: ነ, text: "ነ(Ne)" },
	{ image: ኘ, text: "ኘ(Gne)" },
	{ image: አ, text: "አ(Aa)" },
	{ image: ከ, text: "ከ(Ke)" },
	{ image: ኸ, text: "ኸ(He)" },
	{ image: ወ, text: "ወ(We)" },
	{ image: ዐ, text: "ዐ(Aa)" },
	{ image: ዘ, text: "ዘ(Ze)" },
	{ image: ዠ, text: "ዠ(Zse)" },
	{ image: የ, text: "የ(Ye)" },
	{ image: ደ, text: "ደ(De)" },
	{ image: ጀ, text: "ጀ(Je)" },
	{ image: ገ, text: "ገ(Ge)" },
	{ image: ጠ, text: "ጠ(Tee)" },
	{ image: ጨ, text: "ጨ(Chee)" },
	{ image: ጰ, text: "ጰ()" },
	{ image: ጸ, text: "ጸ(Tse)" },
	{ image: ፀ, text: "ፀ(Tse)" },
	{ image: ፈ, text: "ፈ(Fe)" },
	{ image: ፐ, text: "ፐ(Pe)" },
]

export default function Learn() {
	function ImageCard({ image, text }: { image: any; text: string }) {
		return (
			<Grid item xs={12} sm={6} md={3}>
				<Card
					sx={{
						borderRadius: 3,
						height: { xs: 500, sm: 700 },
						position: "relative",
					}}
				>
					<Box
						component="img"
						src={image}
						sx={{
							height: { xs: 500, sm: 700 },
							width: "100%",
							borderRadius: 3,
						}}
					/>

					<Box
						sx={{
							position: "absolute",
							bgcolor: "black",
							opacity: 0.5,
							width: "100%",
							bottom: 0,
							borderBottomRightRadius: 3,
							borderBottomLeftRadius: 3,
						}}
					>
						<Typography
							sx={{
								fontSize: { xs: 30, sm: 40 },
								fontWeight: "bold",
								color: "white",
								px: 2,
								opacity: 1,
							}}
						>
							{text}
						</Typography>
					</Box>
				</Card>
			</Grid>
		)
	}

	return (
		<Box sx={{ p: { xs: 2, sm: 5 } }}>
			<Grid container spacing={3}>
				{images?.map((item) => (
					<ImageCard image={item?.image} text={item?.text} />
				))}
			</Grid>
		</Box>
	)
}
