import React from 'react'
import { Grid,Button,Typography,Card,CardContent,CardMedia,CardActions,Link,makeStyles } from '@material-ui/core'
import news from '../images/img1.jpg'

export const News = () => {
    const useStyle = makeStyles({
        wrapper: (props) => ({
            
        }),
        header: (props) => ({
            fontSize: '18px',
            fontWeight: '600',
            padding: '20px',
            borderRadius: '4px',
           
        }),
        time: {
            color: '#6a6a6a',
            fontSize: '12px',
        },
        title: (props) => ({
           
        }),
        content: (props) => ({
           
        }),
        link: (props) => ({
           
            fontWeight: '700'
        }),
        situation: (props) => ({
            
        })
    })
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography component="p" >
                        VietNam Latest News
                    </Typography>
                    <Card >
                    <CardMedia
                        component="img"
                        height="140"
                        image={news}
                        alt="green iguana"
                    />
                     <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        Nếu COVID-19 gia tăng, năng lực cung cấp oxy y tế của Việt Nam có đáp ứng nhu cầu điều trị?
                        </Typography>
                        <Typography variant="body2">
                        Thứ trưởng Bộ Y tế Trần Văn Thuấn ngày 23/11
                        cho biết năng lực cung cấp oxy y tế của Việt Nam hiện đáp ứng đủ nhu cầu điều trị. 
                        Nếu trong tình huống dịch COVID-19 bùng phát mạnh thì sẽ chuyển công năng từ 
                        sản xuất oxy công nghiệp sang oxy y tế.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
                            <Link 
                            
                                href="https://covid19.gov.vn/neu-covid-19-gia-tang-nang-luc-cung-cap-oxy-y-te-cua-viet-nam-co-dap-ung-nhu-cau-dieu-tri-171211123232902675.htm"
                            >
                                Read More
                            </Link>
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}