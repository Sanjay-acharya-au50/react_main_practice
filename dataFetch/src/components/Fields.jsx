
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
const Fields = ({name,caste}) => {
  return (
    <div className="dataList">
    <div>{name}</div>
    <div>{caste}</div>
    <Button className='formClass' id='btn' variant="contained" color='success' >
          <AddIcon/>
        </Button>
    </div>
  )
}

export default Fields