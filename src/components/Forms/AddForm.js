import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';

const AddForm = () => {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    'appDescription': null,
    'appId': null,
    'appImageUrl': null,
    'appName': null,
    'appPackageName': null,
    'appRewardAmount': null,
    'caps': null,
    'completecaps': null,
    'payout': null,
    'revenue': null,
    'totalcap': null,
    'totalevents': null,
    'del': null,
    'edit': null,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = e => {
    setForm({...form, [e.target.id]: e.target.value})
  }

  const handleSubmit = async () => {
    const requestOptions = {
      credentials: 'include',
      mode: 'cors',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    };
    // await fetch('', requestOptions)
    // .then(res => res.json)
    // .then(doc => alert(doc))
    // .catch(err => alert(err))
    setOpen(false);
  };

  return (
    <>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <AddBoxSharpIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"><Typography component="h6">Add New Task</Typography></DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="dense"
            id="appDescription"
            label="App Description"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            value={form.appDescription}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="appId"
            label="App Id"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.appId}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="appImageUrl"
            label="App Image URL"
            type="file"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.appImageUrl}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="appName"
            label="App Name"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.appName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="appUrl"
            label="App URL"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.appUrl}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="appPackageName"
            label="App Package Name"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.appPackageName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="appRewardAmount"
            label="App Reward Amount"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.appRewardAmount}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="caps"
            label="Caps"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.caps}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="completecaps"
            label="Complete Caps"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.completecaps}
            onChange={handleInputChange}
          />
                  <TextField
            variant="outlined"
            margin="dense"
            id="eventdecription"
            label="Event Description"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.eventdecription}
            onChange={handleInputChange}
          />
                              <TextField
            variant="outlined"
            margin="dense"
            id="eventdecription2"
            label="Event Description 2"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.eventdecription2}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="payout"
            label="payout"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.payout}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="revenue"
            label="Revenue"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.revenue}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="totalcap"
            label="Total Cap"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.totalcap}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="totalevents"
            label="Total Events"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={form.totalevents}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddForm;