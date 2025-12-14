use serde::Deserialize;
use serde::Serialize;

#[derive(Debug, Serialize, Deserialize)]
pub struct ApiResponse {
    pub identity: Identity,
    pub scopes: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Identity {
    pub id: String,
    pub ysws_eligible: bool,

    pub verification_status: Option<String>,
    pub first_name: Option<String>,
    pub last_name: Option<String>,

    pub primary_email: String,

    pub slack_id: Option<String>,
    pub phone_number: Option<String>,
    pub birthday: Option<String>,

    pub legal_first_name: Option<String>,
    pub legal_last_name: Option<String>,

    pub addresses: Option<Vec<Address>>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Address {
    pub id: String,
    pub first_name: String,
    pub last_name: String,
    pub line_1: String,
    pub line_2: String,
    pub city: String,
    pub state: String,
    pub postal_code: String,
    pub country: String,
    pub phone_number: String,
    pub primary: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UserInfo {
    pub sub: Option<String>,

    pub email: String,
    pub email_verified: bool,

    pub name: Option<String>,
    pub given_name: Option<String>,
    pub family_name: Option<String>,
    pub nickname: Option<String>,

    pub updated_at: Option<String>,

    pub slack_id: Option<String>,
    pub verification_status: Option<String>,

    pub ysws_eligible: Option<bool>,
}

#[derive(Serialize, Deserialize)]
pub struct Token {
    pub access_token: String,
}
