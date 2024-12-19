import { Avatar, Box, Typography } from "@mui/material"


const Home = () => {
  return (
    <>



      <Box
        sx={{
          width: '100%',
          height: '100vh',
          bgcolor: "#6573c3"
        }}
      >

        <Box
          sx={{
            width: '100%',
            height: '80px',
            padding: "20px 80px",
            bgcolor: "#2c387e",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>

          <Typography variant="h6" color="white">Name</Typography>

          <Typography variant="h4" color="white">HOME</Typography>

          <Avatar alt="user" src="pngwing.com (13).png" />

        </Box>



        <Box
          sx={{
            height: '86vh',
            width: "200px",
            bgcolor: "#2c387e",
            padding: '80px 30px'
          }}
        >

          <Typography color="white"  >List</Typography>

          <Typography color="white"  >About</Typography>
          <Typography color="white"  >Contact</Typography>


        </Box>


      </Box>



    </>
  )
}

export default Home