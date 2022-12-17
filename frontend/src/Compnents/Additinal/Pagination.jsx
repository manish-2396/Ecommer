import { Box, Button } from "@mui/material";


export const Paginataion = ({ page, setPage, totalPages }) => {
  return (
    <Box className="btn-groups">
      <Button variant="contained"  onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </Button>
      <span style={{fontSize:"1.3rem" , fontWeight:"bold" , margin:"1rem" , color:"teal"}} >{page}</span>
      <Button variant="contained"  onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next
      </Button>
    </Box>
  );
};