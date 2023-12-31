import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    isActive: false,
    websiteInput: '',
    textInput: '',
    passwordInput: '',
    count: 0,
    searchInput: '',
    passwordList: [],
  }

  onAddButton = event => {
    event.preventDefault()
    const {websiteInput, textInput, passwordInput} = this.state
    const newPasswordList = {
      id: v4(),
      website: websiteInput,
      text: textInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordList],
      websiteInput: '',
      textInput: '',
      passwordInput: '',
    }))
  }

  OnWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  OnWebsiteName = event => {
    this.setState({textInput: event.target.value})
  }

  OnWebsitePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteBtn = id => {
    const {passwordList} = this.state
    this.setState({
      passwordList: passwordList.filter(eachTrash => eachTrash.id !== id),
    })
  }

  isToggle = () => {
    const {isActive} = this.state
    this.setState({isActive: !isActive})
  }

  render() {
    const {
      websiteInput,
      textInput,
      passwordInput,
      count,
      searchInput,
      passwordList,
    } = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="both-con">
          <div className="upper-card-con">
            <form className="add-password-con" onSubmit={this.onAddButton}>
              <h1 className="add-password-heading">Add New password</h1>
              <div className="input-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-img"
                />
                <input
                  type="text"
                  placeholder="Enter website"
                  value={websiteInput}
                  onChange={this.OnWebsite}
                  className="input"
                />
              </div>
              <div className="input-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-img"
                />
                <input
                  type="text"
                  placeholder="Enter website"
                  value={textInput}
                  onChange={this.OnWebsiteName}
                  className="input"
                />
              </div>
              <div className="input-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-img"
                />
                <input
                  type="password"
                  placeholder="Enter website"
                  value={passwordInput}
                  onChange={this.OnWebsitePassword}
                  className="input"
                />
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-img"
            />
          </div>
          <div className="upper-card-con lower">
            <div className="password-search-con">
              <h1 className="add-password-heading lower-heading">
                Your Password<span className="span-element">{count}</span>
              </h1>
              <div className="search-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-img"
                />
                <input
                  type="search"
                  placeholder="Search"
                  onChange={this.onSearchInput}
                  value={searchInput}
                  className="search-input"
                />
              </div>
            </div>
            <hr className="separator" />
            <div className="checkbox-con">
              <input
                type="checkbox"
                className="checkbox"
                onClick={this.isToggle}
              />
              <p className="checkbox-name">Show Passwords</p>
            </div>
            <ul className="un-ordered-list">
              {passwordList.map(eachItem => (
                <PasswordItem
                  passwdItem={eachItem}
                  key={eachItem.id}
                  onDeleteBtn={this.onDeleteBtn}
                  isToggle={this.isToggle}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
