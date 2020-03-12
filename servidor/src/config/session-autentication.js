const uuid = require("uuid/v4");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const { listUser } = require("../config/db");

// const UserDAO = require("../dao/user-dao");
// const db = require("./db");

module.exports = app => {
  //configuracao da sessao e da autenticacao.
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "senha"
      },
      (email, password, done) => {
        const user = listUser(email)
          .then(user => {
            if (!user || password != user.password) {
              return done(null, false, {
                message: "Login e senha incorretos!"
              });
              return done(null, user);
            }
          })
          .catch(erro => done(erro, false));
      }
    )
  );
  passport.serializeUser((user, done) => {
    const userSession = {
      name: user.nome,
      email: user.email
    };
    done(null, userSession);
  });
  passport.deserializeUser((userSession, done) => {
    done(null, userSession);
  });
  app.use(
    session({
      secret: "node wcc",
      genid: function(req) {
        return uuid();
      },
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(function(req, resp, next) {
    req.passport = passport;
    next();
  });
  app.use(passport.initialize());
  app.use(passport.session());
};
