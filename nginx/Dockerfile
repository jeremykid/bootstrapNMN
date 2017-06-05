FROM tutum/nginx

RUN rm /etc/nginx/sites-enabled/default
RUN rm /etc/nginx/sites-available/default

ADD sites-enabled/ /etc/nginx/sites-enabled
ADD sites-available/ /etc/nginx/sites-available
