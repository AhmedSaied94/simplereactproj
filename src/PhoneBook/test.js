<form style={{display:this.props.display}}>
    <div class="form-group row">
      <label  class="col-sm-2 col-form-label">First Name</label>
      <div class="col-sm-10">
        <input type="text" className="form-control"  onChange={this.setFname} value={this.state.fName}/>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Last Name</label>
      <div class="col-sm-10">
        <input type="text" className="form-control" onChange={this.setLname} value={this.state.lName}/>
      </div>
    </div>
    <div class="form-group row">
        <label  class="col-sm-2 col-form-label">Phone</label>
        <div class="col-sm-10">
          <input type="number" className="form-control" onChange={this.setNum} value={this.state.num}/>
        </div>
    </div>
    <div class="form-group row">
        <label  class="col-sm-2 col-form-label" onChange={this.setEmail} value={this.state.email}>Email</label>
        <div class="col-sm-10">
          <input type="email" className="form-control" />
        </div>
    </div>
   
    <div class="form-group row">
      <div class="col-sm-10 text-right offset-2">
        <button type="submit" className="btn btn-primary mr-2" onClick={this.savCon}>Save</button>
        <button type="submit" className="btn btn-outline-primary" onClick={this.props.close}>Close</button>

      </div>
    </div>
  </form>